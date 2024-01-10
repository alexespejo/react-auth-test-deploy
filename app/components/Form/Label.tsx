"use client";
import React, { ReactNode } from "react";
function Label({ children }: { children: ReactNode }) {
 return (
  <div className="label">
   <span className="label-text">{children}</span>
  </div>
 );
}

export default Label;
