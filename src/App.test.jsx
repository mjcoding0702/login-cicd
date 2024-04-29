// App.test.jsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App form submission", () => {
  it("enables the submit button when the email is valid", async () => {
    render(<App />);
    
    // Get the email input and submit button
    const emailInput = screen.getByTestId("emailInput");
    const submitButton = screen.getByTestId("submitButton");
    
    // Type a valid email into the input
    await userEvent.type(emailInput, 'test@');
    
    // Failed case
    expect(submitButton.disabled).toBe(false); 
  });
});
