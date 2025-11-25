import { useState, useEffect } from "react";
import { Plus, RefreshCw, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import TaskList from "@/components/TaskList";
import { Textarea } from "@/components/ui/textarea";

interface Task {
  id: number;
  title: string;
  description: string;
  assignedTo: string;
  dueDate: string;
  status: "pending" | "completed";
  priority: "low" | "medium" | "high";
}

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
    priority: "medium" as "low" | "medium" | "high",
  });
  const { toast } = useToast();

  // Simulação de carregamento inicial de tarefas
  useEffect(() => {
    const mockTasks: Task[] = [
      {
        id: 1,
        title: "Implementar autenticação",
        description: "Adicionar sistema de login e registro de usuários",
        assignedTo: "João Silva",
        dueDate: "2024-12-20",
        status: "pending",
        priority: "high",
      },
      {
        id: 2,
        title: "Criar documentação da API",
        description: "Documentar todos os endpoints da API REST",
        assignedTo: "Maria Santos",
        dueDate: "2024-12-18",
        status: "completed",
        priority: "medium",
      },
      {
        id: 3,
        title: "Otimizar performance do dashboard",
        description: "Melhorar tempo de carregamento e responsividade",
        assignedTo: "Pedro Costa",
        dueDate: "2024-12-22",
        status: "pending",
        priority: "low",
      },
      {
        id: 4,
        title: "Implementar testes unitários",
        description: "Adicionar cobertura de testes para os componentes principais",
        assignedTo: "Ana Oliveira",
        dueDate: "2024-12-25",
        status: "pending",
        priority: "medium",
      },
    ];

    setTimeout(() => {
      setTasks(mockTasks);
      setIsLoading(false);
      toast({
        title: "Tarefas carregadas!",
        description: `${mockTasks.length} tarefas sincronizadas com sucesso.`,
      });
    }, 1000);
  }, [toast]);

  const handleToggleStatus = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "pending" ? "completed" : "pending" }
          : task
      )
    );
    toast({
      title: "Status atualizado!",
      description: "A tarefa foi atualizada com sucesso.",
    });
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast({
      title: "Tarefa excluída!",
      description: "A tarefa foi removida com sucesso.",
      variant: "destructive",
    });
  };

  const handleSyncTasks = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Sincronização concluída!",
        description: "Todas as tarefas estão atualizadas.",
      });
    }, 1500);
  };

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newTask.title || !newTask.description || !newTask.assignedTo || !newTask.dueDate) {
      toast({
        title: "Erro ao criar tarefa",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    const task: Task = {
      id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
      title: newTask.title,
      description: newTask.description,
      assignedTo: newTask.assignedTo,
      dueDate: newTask.dueDate,
      status: "pending",
      priority: newTask.priority,
    };

    setTasks([...tasks, task]);
    setIsDialogOpen(false);
    setNewTask({
      title: "",
      description: "",
      assignedTo: "",
      dueDate: "",
      priority: "medium",
    });
    
    toast({
      title: "Tarefa criada!",
      description: "A nova tarefa foi adicionada com sucesso.",
    });
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === "all") return true;
    return task.status === filterStatus;
  });

  const stats = {
    total: tasks.length,
    pending: tasks.filter((t) => t.status === "pending").length,
    completed: tasks.filter((t) => t.status === "completed").length,
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard de Tarefas</h1>
          <p className="text-muted-foreground">
            Gerencie e acompanhe todas as suas tarefas colaborativas
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total de Tarefas</p>
                <p className="text-2xl font-bold text-foreground">{stats.total}</p>
              </div>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                Total
              </Badge>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pendentes</p>
                <p className="text-2xl font-bold text-foreground">{stats.pending}</p>
              </div>
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
                Em Andamento
              </Badge>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Concluídas</p>
                <p className="text-2xl font-bold text-foreground">{stats.completed}</p>
              </div>
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                Finalizadas
              </Badge>
            </div>
          </Card>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Filtrar por status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="pending">Pendentes</SelectItem>
                <SelectItem value="completed">Concluídas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={handleSyncTasks} disabled={isLoading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
              Sincronizar
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Tarefa
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Criar Nova Tarefa</DialogTitle>
                  <DialogDescription>
                    Preencha os campos abaixo para criar uma nova tarefa colaborativa.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCreateTask} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Título *</Label>
                    <Input
                      id="title"
                      placeholder="Ex: Implementar autenticação"
                      value={newTask.title}
                      onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição *</Label>
                    <Textarea
                      id="description"
                      placeholder="Descreva a tarefa..."
                      rows={3}
                      value={newTask.description}
                      onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="assignedTo">Responsável *</Label>
                    <Input
                      id="assignedTo"
                      placeholder="Nome do responsável"
                      value={newTask.assignedTo}
                      onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dueDate">Prazo *</Label>
                      <Input
                        id="dueDate"
                        type="date"
                        value={newTask.dueDate}
                        onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="priority">Prioridade</Label>
                      <Select
                        value={newTask.priority}
                        onValueChange={(value: "low" | "medium" | "high") =>
                          setNewTask({ ...newTask, priority: value })
                        }
                      >
                        <SelectTrigger id="priority">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Baixa</SelectItem>
                          <SelectItem value="medium">Média</SelectItem>
                          <SelectItem value="high">Alta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      Cancelar
                    </Button>
                    <Button type="submit">
                      <Plus className="h-4 w-4 mr-2" />
                      Criar Tarefa
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Task List */}
        {isLoading ? (
          <div className="text-center py-12">
            <RefreshCw className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Carregando tarefas...</p>
          </div>
        ) : (
          <TaskList
            tasks={filteredTasks}
            onToggleStatus={handleToggleStatus}
            onDelete={handleDeleteTask}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
