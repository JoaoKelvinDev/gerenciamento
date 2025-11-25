import { Clock, User, Check, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Task {
  id: number;
  title: string;
  description: string;
  assignedTo: string;
  dueDate: string;
  status: "pending" | "completed";
  priority: "low" | "medium" | "high";
}

interface TaskCardProps {
  task: Task;
  onToggleStatus: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskCard = ({ task, onToggleStatus, onDelete }: TaskCardProps) => {
  const priorityColors = {
    low: "bg-info/10 text-info border-info/20",
    medium: "bg-warning/10 text-warning border-warning/20",
    high: "bg-destructive/10 text-destructive border-destructive/20",
  };

  return (
    <Card
      className={`p-4 transition-all duration-200 hover:shadow-md ${
        task.status === "completed" ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h3
              className={`font-semibold text-foreground ${
                task.status === "completed" ? "line-through" : ""
              }`}
            >
              {task.title}
            </h3>
            <Badge variant="outline" className={priorityColors[task.priority]}>
              {task.priority}
            </Badge>
            {task.status === "completed" && (
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <Check className="h-3 w-3 mr-1" />
                Concluída
              </Badge>
            )}
          </div>

          <p className="text-sm text-muted-foreground">{task.description}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{task.assignedTo}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{task.dueDate}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Button
            size="sm"
            variant={task.status === "completed" ? "outline" : "default"}
            onClick={() => onToggleStatus(task.id)}
          >
            {task.status === "completed" ? "Reabrir" : "Concluir"}
          </Button>
          <Button size="sm" variant="destructive" onClick={() => onDelete(task.id)}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
