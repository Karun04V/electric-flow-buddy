from fastapi import APIRouter

# This is the router object for the dashboard module.
router = APIRouter(
    prefix="/api/dashboard",
    tags=["Dashboard"],
)

@router.get("/kpis")
async def get_dashboard_kpis():
    """Provides the main KPIs for the dashboard header."""
    stats = {
        "activeBuses": 11,
        "totalPassengers": 487,
        "averageOccupancy": 68.2,
        "energyEfficiency": 92.5,
        "emissionsReduced": 23,
        "onTimePerformance": 94
    }
    return stats

