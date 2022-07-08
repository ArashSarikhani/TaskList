describe("TaskList", () => {
  it("user Can add task", () => {
    cy.visit("/");
    cy.findByRole("button", { name: /create your first task ;\)/i }).click();
    cy.findByRole("textbox", { name: /task title/i }).type("Task 1");
    cy.findByRole("textbox", { name: /description/i }).type(
      "Task 1 description"
    );
    cy.findByRole("radio", { name: /medium/i }).check();
    cy.findByRole("button", { name: /add to tasks/i }).click();
  });
  it("user can add another task", () => {
    cy.findByRole("button", { name: /add/i }).click();
    cy.findByRole("textbox", { name: /task title/i }).type("Task 2");
    cy.findByRole("textbox", { name: /description/i }).type(
      "Task 2 description"
    );
    cy.findByRole("radio", { name: /medium/i }).check();
    cy.findByRole("button", { name: /add to tasks/i }).click();
  });
  it("user can edit task 1", () => {
    cy.findByTestId("task-card-edit-Task 1").click();
    cy.findByRole("textbox", { name: /task title/i }).type("Task 11");
    cy.findByRole("textbox", { name: /description/i }).type(
      "Task 11 description"
    );
    cy.findByRole("button", { name: /edit task/i }).click();
  });
  it("user can edit task 2", () => {
    cy.findByTestId("task-card-Task 2").click();
    cy.findByRole("button", { name: /edit task/i }).click();
    cy.findByRole("textbox", { name: /task title/i }).type("Task 22");
    cy.findByRole("textbox", { name: /description/i }).type(
      "Task 22 description"
    );
    cy.findByRole("button", { name: /edit task/i }).click();
  });
  it("user can complete task 1", () => {
    cy.findByTestId("task-card-complete-Task 11").click();
  });
  it("user can delete task 1", () => {
    cy.findByTestId("task-card-Task 22").click();
    cy.findByRole("button", { name: /delete task/i }).click();
  });
  it("user can view completed task", () => {
    cy.findByRole("button", { name: /view done tasks/i }).click();
    cy.findByText("Task 11").should("exist");
  });
});
