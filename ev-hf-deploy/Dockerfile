# 1. Base image
FROM python:3.10-slim

# 2. Set working directory
WORKDIR /app

# 3. Copy all files into container
COPY . .

# 4. Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# 5. Expose port (Gradio runs here)
EXPOSE 7860

# 6. Run the app
CMD ["python", "app.py"]