import { User, BookOpen, Star } from "lucide-react";
import { PublicNavbar } from "@/components/layout/PublicNavbar";
import { Footer } from "@/components/layout/Footer";
import { AppCard, AppCardHeader, AppCardTitle, AppCardDescription, AppCardContent } from "@/components/common/AppCard";

const teachers = [
  {
    name: "د. أحمد محمد",
    subject: "الرياضيات",
    experience: "15 سنة",
    rating: 4.9,
    courses: 8,
  },
  {
    name: "أ. فاطمة علي",
    subject: "اللغة العربية",
    experience: "12 سنة",
    rating: 4.8,
    courses: 6,
  },
  {
    name: "د. محمود حسن",
    subject: "العلوم",
    experience: "10 سنوات",
    rating: 4.7,
    courses: 5,
  },
  {
    name: "أ. سارة أحمد",
    subject: "اللغة الإنجليزية",
    experience: "8 سنوات",
    rating: 4.9,
    courses: 7,
  },
  {
    name: "د. عمر خالد",
    subject: "التاريخ",
    experience: "20 سنة",
    rating: 4.6,
    courses: 4,
  },
  {
    name: "أ. نور الدين",
    subject: "الجغرافيا",
    experience: "6 سنوات",
    rating: 4.5,
    courses: 3,
  },
];

const Teachers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicNavbar />
      <main className="flex-1 py-12">
        <div className="container">
          {/* Page Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-foreground mb-4">المعلمون</h1>
            <p className="text-muted-foreground max-w-2xl">
              تعرف على فريق المعلمين المتميزين الذين يقودون العملية التعليمية في مدرسة نصر الدين
            </p>
          </div>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher, index) => (
              <AppCard key={index} hover>
                <AppCardHeader className="text-center">
                  <div className="w-20 h-20 rounded-full bg-secondary border-2 border-border flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <AppCardTitle>{teacher.name}</AppCardTitle>
                  <AppCardDescription>{teacher.subject}</AppCardDescription>
                </AppCardHeader>
                <AppCardContent>
                  <div className="flex items-center justify-center gap-6 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span>{teacher.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>{teacher.courses} مقررات</span>
                    </div>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-3">
                    خبرة {teacher.experience}
                  </p>
                </AppCardContent>
              </AppCard>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Teachers;
