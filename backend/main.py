from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import your API router modules here
from auth import routes as auth_routes
from dashboard import routes as dashboard_routes
from leads import routes as leads_routes
# from ingestion import websocket as websocket_manager

# Create an instance of the FastAPI class
app = FastAPI(
    title="ElectricFlow API",
    description="Backend services for the ElectricFlow transit optimization platform.",
    version="1.0.0"
)

# --- Middleware ---
# This is crucial for allowing your frontend (running on a different port)
# to communicate with your backend.
origins = [
    "http://localhost:8000", # Your frontend's development URL
    "http://localhost:5173", # The default Vite dev server URL
    # Add your production frontend URL here when you deploy
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- API Routers ---
# Include the routers from your feature modules.
# This keeps your main file clean.
app.include_router(auth_routes.router)
app.include_router(dashboard_routes.router)
app.include_router(leads_routes.router)


# --- Root Endpoint ---
@app.get("/")
def read_root():
    """
    A simple welcome message for the API root.
    """
    return {"message": "Welcome to the ElectricFlow Backend!"}


# --- WebSocket Connection ---
# The websocket logic will be handled in its own module
# @app.websocket("/ws/live-fleet")
# async def websocket_endpoint(websocket: WebSocket):
#     await websocket_manager.connect(websocket)
#     try:
#         while True:
#             # Keep the connection alive
#             await websocket.receive_text()
#     except WebSocketDisconnect:
#         websocket_manager.disconnect(websocket)

