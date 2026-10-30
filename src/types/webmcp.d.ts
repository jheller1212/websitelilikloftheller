/* eslint-disable @typescript-eslint/no-unused-vars -- type params must match React's declarations to merge */
// WebMCP declarative attributes (Chrome origin trial). The browser reads these
// to expose a form as a structured tool to AI agents; browsers without WebMCP
// ignore them. https://developer.chrome.com/docs/ai/webmcp/declarative-api
import "react";

declare module "react" {
  interface FormHTMLAttributes<T> {
    toolname?: string;
    tooldescription?: string;
  }
  interface InputHTMLAttributes<T> {
    toolparamdescription?: string;
  }
  interface SelectHTMLAttributes<T> {
    toolparamdescription?: string;
  }
  interface TextareaHTMLAttributes<T> {
    toolparamdescription?: string;
  }
}
