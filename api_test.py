import fastapi
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = fastapi.FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def index():
    return {"message": "Hello, World"}

class SignupData(BaseModel):
    email: str
    password: str

# Request body mandatory
@app.post("/auth/signup")
def signup(data: SignupData):
    if data.email == "toto@gmail.com":
        return {
            "code": 201,
            "data": {
                "user": {
                    "id": 1,
                    "email": data.email
                },
                "session": {
                    "accessToken": "1234567890",
                },
            }
        }
    else:
        return {
            "code": 400,
            "message": "Email already exists"
        }


@app.post("/auth/signin")
def signin(data: SignupData):
    if data.email == "toto@gmail.com":
        return {
            "code": 200,
            "data": {
                "user": {
                    "id": 1,
                    "email": data.email
                },
                "session": {
                    "accessToken": "1234567890",
                },
            }
        }
    else:
        return {
            "code": 400,
            "message": "Email or password is incorrect"
        }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=3001)