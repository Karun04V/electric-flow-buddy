from fastapi import APIRouter
from pydantic import BaseModel, EmailStr

# This is the router object for the leads module.
router = APIRouter(
    prefix="/public",
    tags=["Leads"],
)

# Pydantic model for the incoming data
class ConsultationLead(BaseModel):
    first_name: str
    last_name: str
    work_email: EmailStr
    phone_number: str

@router.post("/request-consultation")
async def request_consultation(lead: ConsultationLead):
    """Handles the 'Request a Consultation' form submission."""
    # In a real app, you would save this to a database
    print(f"New lead received: {lead.first_name} {lead.last_name}")
    return {"message": "Consultation request received successfully!", "lead_data": lead}

