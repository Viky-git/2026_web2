// start creating server here

import http from "http";

let todos = [];
let currentId = 1;

const server = http.createServer((req, res) => {
    //-------------------------------------------------------------------------------------------
  const sendJSON = (status, data) => {
    res.writeHead(status, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  };

  //-------------------------------------------------------------------------------------------
  const sendText = (status, text) => {
    res.writeHead(status, { "Content-Type": "text/plain" });
    res.end(text);
  };

  //-------------------------------------------------------------------------------------------
  const getBody = (callback) => {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const parsed = JSON.parse(body || "{}");
        callback(parsed);
      } catch {
        sendJSON(400, { error: "Invalid JSON" });
      }
    });
  };
  
  //-------------------------------------------------------------------------------------------
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;
  const id = parsedUrl.searchParams.get("id");

  // ---------------- ROOT --------------------------------------------------------------------
  if (req.method === "GET" && pathname === "/") {
    return sendText(200, "Hello World");
  }

  // ---------------- POST /create/todo -----
  if (req.method === "POST" && pathname === "/create/todo") {
    return getBody((body) => {
      const { title, description } = body;

      if (!title || !description) {
        return sendJSON(400, { error: "Invalid input" });
      }

      const newTodo = {
        id: currentId++,
        title,
        description
      };

      todos.push(newTodo);

      // ⚠️ TEST EXPECTS 200 (NOT 201)
      return sendJSON(200, todos);
    });
  }

  // ---------------- GET /todos -----
  if (req.method === "GET" && pathname === "/todos") {
    return sendJSON(200, todos);
  }

  // ---------------- GET /todo?id= -----
  if (req.method === "GET" && pathname === "/todo") {
    const numericId = Number(id);

    if (!id || isNaN(numericId)) {
      return sendJSON(404, { error: "Todo not found" });
    }

    const todo = todos.find(t => t.id === numericId);

    if (!todo) {
      return sendJSON(404, { error: "Todo not found" });
    }

    return sendJSON(200, todo);
  }

  // ---------------- DELETE /todo?id= ----
  if (req.method === "DELETE" && pathname === "/todo") {
    const numericId = Number(id);

    if (!id || isNaN(numericId)) {
      return sendJSON(404, { error: "Todo not found" });
    }

    const index = todos.findIndex(t => t.id === numericId);

    if (index === -1) {
      return sendJSON(404, { error: "Todo not found" });
    }

    todos.splice(index, 1);

    return sendJSON(200, { message: "Deleted" });
  }

  // ---------------- FALLBACK -----
  return sendJSON(404, { error: "Route not found" });
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

export default server;