document.addEventListener("DOMContentLoaded", () => {
    initModelListner();
});

function initModelListner() {
    const modaloverlay = document.getElementById("busModalOverlay");
    const CloseBtn = document.getElementById("busModalClosebtn");
    const CloseFooterBtn = document.getElementById("busModalCloseFooterBtn");

    if(CloseBtn) CloseBtn.addEventListener("click", closeBusModal);
    if(CloseFooterBtn) CloseFooterBtn.addEventListener("click", closeBusModal);

    if(modalOverlay) {
        modaloverlay.addEventListener("click", (e) => {
            if(e.target === modaloverlay) {
                closeBusModal();
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if(e.key === "Escape" && modaloverlay.classList.contains("open")) {
            closeBusModal();
        }
    });
}

function openBusModal(busId){
    const bus = busData.find(b => b.id === busId);

    if(!bus) return;
}

const modalOverlay = document.getElementById("busModalOverlay");
const modalContent = document.getElementById("busModalContent");
const modalTitle = document.getElementById("busModalTitle");
const modalBody = document.getElementById("busModalBody");

if(modalTitle) {
    modalTitle.textContent = `Bus ${bus.busNumber} Details`;
}

if(modalBody) {
    modalBody.innerHTML =`
    <div class = "modal-info-grid">
      <div class = "info-item">
            <label>Bus Number:</label>
            <span>Bus #${bus.busNumber}</span>
        </div>    
      <div class = "info-item">
            <label>Driver Name:</label>
            <span>Bus ${bus.driverName}</span>
        </div> 
      <div class = "info-item">
            <label>Route Number:</label>
            <span>Bus #${bus.routeNumber}</span>
        </div>
      <div class = "info-item">
            <label>Current Stop:</label>
            <span>Bus ${bus.currentStop}</span>
        </div> 
      <div class = "info-item">
            <label>Next Stop:</label>
            <span>Bus ${bus.nextStop}</span>
        </div> 
      <div class = "info-item">
            <label>Estimated Arrival:</label>
            <span>Bus #${bus.status === 'Cancelled' ? 'N/A (cancelled)' : `${bus.etaMinutes} minutes`}</span>
        </div> 
      <div class = "info-item">
            <label>Available Seats:</label>
            <span>Bus ${bus.availableSeats} / ${bus.totalSeats} Seats</span>
        </div>
        <div class = "info-item">
            <label>Live Status:</label>
            <span>Bus ${getStatusBadge(bus.status)}</span>
        </div> 
    </div>
    `;

    
}