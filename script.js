document.getElementById('calculateBtn').addEventListener('click', function() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
  
    const difference = endDate.getTime() - startDate.getTime();
    const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
  
    document.getElementById('result').innerText = `Difference: ${daysDifference} days`;
  });
  