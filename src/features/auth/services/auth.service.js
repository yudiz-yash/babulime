import { httpClient } from "@/services";

export function login(payload) {
  return httpClient("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
