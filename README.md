# ⚡ EV Range Predictor: Electric Vehicle Energy Analytics

A full-stack machine learning application designed to estimate Electric Vehicle (EV) driving range based on real-world operating conditions. The platform combines a trained predictive model with an interactive web dashboard to provide instant range predictions and energy efficiency insights.

---

## 🚀 Key Features

### 🔋 Machine Learning Range Estimation

* Predicts EV driving range using a trained machine learning model.
* Considers battery capacity, driving speed, vehicle type, and environmental conditions.

### 📊 Interactive Dashboard

* Modern React-based interface for entering vehicle parameters.
* Provides a simple and intuitive prediction workflow.

### ⚡ Real-Time Predictions

* Connects the frontend to a FastAPI backend serving the trained model.
* Generates range estimates instantly through API-based inference.

### 🐳 Deployment Ready

* Includes Docker support for simplified deployment and environment consistency.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Python
* FastAPI
* Uvicorn

### Machine Learning

* Scikit-Learn
* Pandas
* NumPy
* Jupyter Notebook

### Deployment

* Docker

---

## 🏗️ System Architecture & Logic

### 1. User Input

The user enters vehicle and environmental parameters through the dashboard.

### 2. Data Processing

Input values are transformed into machine-learning-ready features before prediction.

### 3. Range Prediction

The trained model evaluates the processed inputs and estimates the expected driving range.

### 4. Result Visualization

The predicted range is returned through the API and displayed instantly on the dashboard.

---

## 🔧 Installation & Setup

### Prerequisites

* Node.js (v16 or higher)
* Python (v3.8 or higher)

### 1. Backend Installation

```bash
cd ev-hf-deploy

pip install -r requirements.txt

uvicorn main:app --reload
```

### 2. Frontend Installation

```bash
cd ev-dashboard

npm install

npm start
```

---

## 📂 Project Structure

```text
EV-PROJECT/
│
├── ev-dashboard/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── README.md
│
├── ev-hf-deploy/
│   ├── app.py
│   ├── Dockerfile
│   ├── model.pkl
│   └── requirements.txt
│
├── model.ipynb
├── main.py
├── universal_ev_model.pkl
├── EV_Energy_Consumption_Dataset.csv
│
├── README.md
└── .gitignore
```
