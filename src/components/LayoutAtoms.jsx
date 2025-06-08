"use client";
import React from "react";
import "./LayoutAtoms.css";

export function Container({ children, style = {} }) {
  return <div className="container" style={style}>{children}</div>;
}

export function Box({ children, style = {} }) {
  return <div className="box" style={style}>{children}</div>;
}

export function Bar({ children, style = {} }) {
  return <div className="bar" style={style}>{children}</div>;
}

export function Divider({ style = {} }) {
  return <div className="divider" style={style}></div>;
}

export function Grid({ children, style = {} }) {
  return <div className="grid" style={style}>{children}</div>;
}

export function Flex({ children, style = {} }) {
  return <div className="flex" style={style}>{children}</div>;
}

export function Section({ children, style = {} }) {
  return <section className="section" style={style}>{children}</section>;
}
