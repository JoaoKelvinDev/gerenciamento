import { Target, Heart, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Sobre o TaskCollab</h1>
            <p className="text-lg text-muted-foreground">
              Um projeto didático focado em gerenciamento de tarefas colaborativo
            </p>
          </div>

          {/* Main Content */}
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Nossa Proposta</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                O <strong className="text-foreground">TaskCollab</strong> é um gerenciador de
                tarefas colaborativo desenvolvido como projeto didático, demonstrando conceitos
                fundamentais de desenvolvimento web moderno com React.
              </p>
              <p>
                Este projeto explora a estruturação de uma aplicação React completa, utilizando
                React Router para navegação, gerenciamento de estado com hooks (useState e
                useEffect), e estilização profissional com Tailwind CSS.
              </p>
              <p>
                O foco principal é criar uma experiência de usuário fluida e intuitiva para o
                gerenciamento de tarefas em equipe, permitindo que usuários visualizem, criem,
                atribuam e concluam tarefas de forma colaborativa.
              </p>
            </div>
          </Card>

          {/* Values Grid */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <Card className="p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Objetivo</h3>
                <p className="text-sm text-muted-foreground">
                  Demonstrar estruturação de projetos React com navegação e gerenciamento de
                  estado
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Propósito</h3>
                <p className="text-sm text-muted-foreground">
                  Criar uma base sólida para aplicações colaborativas e escaláveis
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Aprendizado</h3>
                <p className="text-sm text-muted-foreground">
                  Explorar React Router, hooks e design system com Tailwind CSS
                </p>
              </div>
            </Card>
          </div>

          {/* Technologies */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">Tecnologias Utilizadas</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Frontend</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• React 18 com TypeScript</li>
                  <li>• React Router DOM para navegação</li>
                  <li>• Tailwind CSS para estilização</li>
                  <li>• shadcn/ui para componentes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Conceitos Aplicados</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hooks: useState, useEffect</li>
                  <li>• Roteamento e navegação</li>
                  <li>• Design system e tokens</li>
                  <li>• Componentes reutilizáveis</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
