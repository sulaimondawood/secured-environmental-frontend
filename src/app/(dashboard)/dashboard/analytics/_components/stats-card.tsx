import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: {
    value: string | number;
    positive?: boolean;
    neutral?: boolean;
  };
}

export function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
}: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || trend) && (
          <p className="text-xs text-muted-foreground flex items-center">
            {trend && (
              <span
                className={`mr-1 ${
                  trend.neutral
                    ? "text-muted-foreground"
                    : trend.positive
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {trend.positive ? "↑" : trend.neutral ? "→" : "↓"} {trend.value}
              </span>
            )}
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
