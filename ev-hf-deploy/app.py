import gradio as gr
import pickle
import numpy as np

# Load model
model = pickle.load(open("model.pkl", "rb"))

# Prediction function
def predict(battery_capacity, motor_power, weight):

    # Convert input to numpy array (IMPORTANT)
    input_data = np.array([[battery_capacity, motor_power, weight]])

    prediction = model.predict(input_data)

    return f"Estimated EV Range: {prediction[0]:.2f} km"


# Gradio Interface
interface = gr.Interface(
    fn=predict,
    inputs=[
        gr.Number(label="Battery Capacity (kWh)"),
        gr.Number(label="Motor Power (kW)"),
        gr.Number(label="Vehicle Weight (kg)")
    ],
    outputs="text",
    title="EV Range Predictor",
    description="Enter vehicle specs to estimate range"
)

interface.launch(server_name="0.0.0.0", server_port=7860)