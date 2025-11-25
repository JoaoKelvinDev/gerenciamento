import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Home = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "Gestão Eficiente",
      description: "Organize e priorize suas tarefas de forma simples e intuitiva.",
    },
    {
      icon: Users,
      title: "Colaboração em Equipe",
      description: "Trabalhe em conjunto com sua equipe em tempo real.",
    },
    {
      icon: Zap,
      title: "Produtividade Máxima",
      description: "Aumente a eficiência com ferramentas inteligentes de gestão.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl mb-6">
              Gerenciamento de Tarefas Colaborativo
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8">
              Organize suas tarefas, colabore com sua equipe e alcance seus objetivos de forma
              mais eficiente com o TaskCollab.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Acessar Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/sobre">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-background/10 text-primary-foreground border-primary-foreground/20 hover:bg-background/20">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              Recursos Principais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubra como o TaskCollab pode transformar a forma como você e sua equipe
              trabalham.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pronto para começar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Crie sua conta gratuitamente e comece a gerenciar suas tarefas hoje mesmo.
            </p>
            <Link to="/login">
              <Button size="lg" className="min-w-[200px]">
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
