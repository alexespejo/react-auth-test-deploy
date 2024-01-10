"use client";
import { ReactNode } from "react";

function FormControl({ children }: { children: ReactNode }) {
 return <label className="form-control w-full max-w-xs">{children}</label>;
}

export default FormControl;
