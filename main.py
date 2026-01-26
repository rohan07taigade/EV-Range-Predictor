from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib

# --- 1. SETUP ---
app = FastAPI()

# --- 2. SECURITY FIX (THE MISSING PIECE) ---
# This allows your React Website to talk to this Python Server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all connections
    allow_credentials=True,
    allow_methods=["*"],  # Allows all modes (POST, GET)
    allow_headers=["*"],
)

# --- 3. LOAD BRAIN ---
model = joblib.load('universal_ev_model.pkl')

# --- 4. DEFINE INPUTS ---
class UserInput(BaseModel):
    category: str
    speed_kmh: float
    temperature_c: float
    battery_kwh: float

# --- 5. SETTINGS ---
CATEGORY_WEIGHTS = {
    "Hatchback": 1200, 
    "Sedan": 1600,     
    "SUV": 2100,       
    "Truck": 2500      
}

# --- 6. THE ENDPOINT ---
@app.post("/predict")
def predict_range(data: UserInput):
    weight = CATEGORY_WEIGHTS.get(data.category, 1800)
    
    # Predict Energy (Distance=100, Traffic=2, Road=1)
    model_inputs = [[100, data.speed_kmh, 2, data.temperature_c, 1, weight]]
    predicted_energy_100km = model.predict(model_inputs)[0]
    
    # Calculate Range
    estimated_range_km = (data.battery_kwh / predicted_energy_100km) * 100
    
    return {
        "estimated_range_km": round(estimated_range_km, 1)
    }