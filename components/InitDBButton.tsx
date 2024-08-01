"use client";

import React from "react";

import { initDB } from "@/lib/actions/admin.actions";
import { Button, ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";

const InitDBButton = ({ className }: ButtonProps) => {
  return (
    <Button
      type="button"
      className={cn(className, "shad-primary-btn w-full")}
      onClick={async () => {
        await initDB();
      }}
    >
      Init DB
    </Button>
  );
};

export default InitDBButton;
