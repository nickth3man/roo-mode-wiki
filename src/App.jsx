import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { ScrollArea } from '@/components/ui/scroll-area.jsx';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { 
  Search, 
  Menu, 
  ChevronRight, 
  ChevronLeft, 
  Home, 
  Book, 
  ExternalLink,
  Moon,
  Sun
} from 'lucide-react';
import { docsStructure, docsMap, getAdjacentDocs } from './lib/docs-data.js';
import { parseMarkdown, extractTOC } from './lib/markdown-parser.js';
import './App.css';

// Theme toggle hook
const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
};

// Sidebar Navigation Component
const Sidebar = ({ isOpen, onClose, currentDocId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState(new Set(['getting-started']));

  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const filteredDocs = docsStructure.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="w-80 border-r border-border bg-card h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2 mb-4">
          <Book className="h-6 w-6 text-primary" />
          <h1 className="text-lg font-bold text-foreground">Roo Code Wiki</h1>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search documentation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-4">
          {filteredDocs.map((section) => (
            <div key={section.id} className="mb-4">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center gap-2 w-full text-left p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <span className="text-lg">{section.icon}</span>
                <span className="font-semibold text-foreground">{section.title}</span>
                <ChevronRight 
                  className={`h-4 w-4 ml-auto transition-transform ${
                    expandedSections.has(section.id) ? 'rotate-90' : ''
                  }`} 
                />
              </button>
              
              {expandedSections.has(section.id) && (
                <div className="ml-6 mt-2 space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.id}
                      to={`/docs/${item.id}`}
                      onClick={onClose}
                      className={`block p-2 rounded-lg text-sm transition-colors ${
                        currentDocId === item.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-accent text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <div className="font-medium">{item.title}</div>
                      <div className="text-xs opacity-75 mt-1">{item.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

// Table of Contents Component
const TableOfContents = ({ headings }) => {
  if (!headings || headings.length === 0) return null;

  return (
    <div className="w-64 p-4">
      <h3 className="font-semibold text-foreground mb-3">On this page</h3>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm text-muted-foreground hover:text-foreground transition-colors ${
              heading.level === 1 ? 'font-medium' : 
              heading.level === 2 ? 'ml-2' : 'ml-4'
            }`}
          >
            {heading.title}
          </a>
        ))}
      </nav>
    </div>
  );
};

// Documentation Page Component
const DocPage = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [toc, setToc] = useState([]);

  useEffect(() => {
    const loadDoc = async () => {
      if (!docId || !docsMap[docId]) {
        navigate('/docs/01-overview');
        return;
      }

      setLoading(true);
      try {
        const docInfo = docsMap[docId];
        const response = await fetch(`/docs/${docInfo.file}`);
        const markdown = await response.text();
        
        setContent(parseMarkdown(markdown));
        setToc(extractTOC(markdown));
      } catch (error) {
        console.error('Error loading document:', error);
        setContent('<p>Error loading document.</p>');
      } finally {
        setLoading(false);
      }
    };

    loadDoc();
  }, [docId, navigate]);

  const docInfo = docsMap[docId];
  const { previous, next } = getAdjacentDocs(docId);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex">
      <div className="flex-1 max-w-4xl">
        <div className="p-8">
          {docInfo && (
            <div className="mb-6">
              <Badge variant="secondary" className="mb-2">
                {docInfo.section}
              </Badge>
              <div className="text-sm text-muted-foreground mb-4">
                {docInfo.description}
              </div>
            </div>
          )}
          
          <div 
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
            {previous ? (
              <Link to={`/docs/${previous.id}`}>
                <Button variant="outline" className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Previous</div>
                    <div className="font-medium">{previous.title}</div>
                  </div>
                </Button>
              </Link>
            ) : <div />}
            
            {next ? (
              <Link to={`/docs/${next.id}`}>
                <Button variant="outline" className="flex items-center gap-2">
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Next</div>
                    <div className="font-medium">{next.title}</div>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>
      
      <div className="hidden xl:block border-l border-border">
        <TableOfContents headings={toc} />
      </div>
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Roo Code Custom Modes Wiki
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive documentation for creating and managing custom AI modes
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/docs/01-overview">
              <Button size="lg" className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                Get Started
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              <a href="https://docs.roocode.com/" target="_blank" rel="noopener noreferrer">
                Official Docs
              </a>
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docsStructure.map((section) => (
            <div key={section.id} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-2xl mb-3">{section.icon}</div>
              <h3 className="font-semibold text-foreground mb-2">{section.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {section.items.length} articles
              </p>
              <Link to={`/docs/${section.items[0].id}`}>
                <Button variant="outline" size="sm" className="w-full">
                  Explore
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const AppContent = () => {
  const { theme, setTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { docId } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-80">
                <Sidebar 
                  isOpen={sidebarOpen} 
                  onClose={() => setSidebarOpen(false)}
                  currentDocId={docId}
                />
              </SheetContent>
            </Sheet>
            
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Home</span>
            </Link>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </header>
      
      <div className="flex h-[calc(100vh-73px)]">
        <div className="hidden lg:block">
          <Sidebar currentDocId={docId} onClose={() => {}} />
        </div>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs/:docId" element={<DocPage />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

