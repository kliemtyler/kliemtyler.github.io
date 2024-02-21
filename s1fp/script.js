document.addEventListener('DOMContentLoaded', () => {
    const draggableContainer = document.getElementById('draggable-container');
    let isDragging = false;
    let offsetX, offsetY;
  
    document.addEventListener('mousedown', (e) => {
      if (e.target.classList.contains('draggable')) {
        isDragging = true;
        offsetX = e.clientX - draggableContainer.getBoundingClientRect().left;
        offsetY = e.clientY - draggableContainer.getBoundingClientRect().top;
      }
    });
  
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
  
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
  
      draggableContainer.style.left = `${x}px`;
      draggableContainer.style.top = `${y}px`;
    });
  
    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
  
        // Create a new chair at the final position
        const x = parseFloat(draggableContainer.style.left);
        const y = parseFloat(draggableContainer.style.top);
        const newChair = createNewChair(x, y);
        draggableContainer.appendChild(newChair);
      }
    });
  
    function createNewChair(x, y) {
      const newChair = document.createElement('img');
      newChair.src = 'greenchair3.png';
      newChair.alt = 'Draggable Image';
      newChair.className = 'draggable';
      newChair.style.position = 'absolute';
      newChair.style.width = '200px';
      newChair.style.cursor = 'grab';
  
      newChair.style.left = `${x}px`;
      newChair.style.top = `${y}px`;
  
      newChair.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - newChair.getBoundingClientRect().left;
        offsetY = e.clientY - newChair.getBoundingClientRect().top;
      });
  
      return newChair;
    }
  });