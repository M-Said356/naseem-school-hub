import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BookOpen, FileText, Calendar, MessageSquare, User, LogOut, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { AppCard, AppCardHeader, AppCardTitle, AppCardDescription, AppCardContent } from "@/components/common/AppCard";

const dashboardItems = [
  {
    title: "مقرراتي",
    description: "عرض المقررات المسجلة والمحتوى التعليمي",
    icon: BookOpen,
    href: "/dashboard/courses",
    count: 4,
  },
  {
    title: "الواجبات",
    description: "متابعة الواجبات والمهام الدراسية",
    icon: FileText,
    href: "/dashboard/assignments",
    count: 2,
  },
  {
    title: "الجدول الدراسي",
    description: "عرض مواعيد الحصص والامتحانات",
    icon: Calendar,
    href: "/dashboard/schedule",
    count: null,
  },
  {
    title: "الرسائل",
    description: "التواصل مع المعلمين والإدارة",
    icon: MessageSquare,
    href: "/dashboard/messages",
    count: 3,
  },
];

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-depth-sm">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-lg font-bold text-foreground">
                مدرسة نصر الدين
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground">لوحة التحكم</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center">
                  <User className="h-4 w-4 text-muted-foreground" />
                </div>
                <span className="text-sm text-foreground hidden sm:inline">
                  {user.user_metadata?.full_name || user.email}
                </span>
              </div>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 ml-2" />
                تسجيل الخروج
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            مرحباً، {user.user_metadata?.full_name || "طالب"}! 👋
          </h1>
          <p className="text-muted-foreground">
            إليك نظرة عامة على نشاطك الدراسي
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardItems.map((item, index) => (
            <AppCard key={index} hover className="cursor-pointer">
              <AppCardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  {item.count !== null && (
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary text-primary-foreground">
                      {item.count}
                    </span>
                  )}
                </div>
                <AppCardTitle>{item.title}</AppCardTitle>
                <AppCardDescription>{item.description}</AppCardDescription>
              </AppCardHeader>
              <AppCardContent>
                <Link
                  to={item.href}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  عرض التفاصيل
                  <ChevronLeft className="h-4 w-4" />
                </Link>
              </AppCardContent>
            </AppCard>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-4">النشاط الأخير</h2>
          <AppCard>
            <AppCardContent className="py-8 text-center">
              <p className="text-muted-foreground">
                لا يوجد نشاط حديث حالياً. ابدأ بتصفح المقررات!
              </p>
              <Link to="/courses">
                <Button className="mt-4">
                  تصفح المقررات
                </Button>
              </Link>
            </AppCardContent>
          </AppCard>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
