import "@testing-library/jest-dom/extend-expect"
import { loadEnvConfig } from "@next/env"

console.log("env loaded...")

// load env vars from .env.test and .env.test.local
loadEnvConfig()
