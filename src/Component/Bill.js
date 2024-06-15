import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import moment from 'moment';
import jsPDF from 'jspdf';

function Bill() {
  const [bills, setBills] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3005/bills')
      .then(res => setBills(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleAddBill = () => {
    axios.post('http://localhost:3005/bills', { title, amount })
      .then(res => {
        setBills([...bills, res.data]);
        setTitle('');
        setAmount('');
      })
      .catch(err => console.log(err));
  };

  const handleDeleteBill = (id) => {
    axios.delete(`http://localhost:3005/bills/${id}`)
      .then(() => {
        setBills(bills.filter(bill => bill._id !== id));
      })
      .catch(err => console.log(err));
  };

  const handleDownloadBill = (bill) => {
    const doc = new jsPDF();
    doc.text(`Title: ${bill.title}`, 20, 20);
    doc.text(`Amount: $${bill.amount}`, 20, 30);
    doc.save(`bill_${bill._id}.pdf`);
  };



  // Remove date from bill
  const handleDownloadAllBills = () => {
    const doc = new jsPDF();

    // Set initial y-coordinate and margin
    let yOffset = 20;
    const margin = 10;

    // Set up the table headers
    const headers = ['#', 'Title', 'Amount'];

    // Set up column widths and row height
    const columnWidths = [20, 60, 40]; // Adjust column widths as needed
    const rowHeight = 10; // Adjust row height as needed

    // Total amount of bills
    let totalAmount = 0;

    // Add table title
    doc.setFontSize(12);
    doc.text('All Bills', margin, yOffset);
    yOffset += 10; // Increment y-coordinate for the next line

    // Draw table headers without background color
    headers.forEach((header, index) => {
      doc.rect(margin + columnWidths.slice(0, index).reduce((sum, width) => sum + width, 0), yOffset, columnWidths[index], rowHeight);
      doc.setTextColor(0, 0, 0); // Set text color to black
      doc.text(header, margin + columnWidths.slice(0, index).reduce((sum, width) => sum + width, 0) + columnWidths[index] / 2, yOffset + rowHeight / 2, { align: 'center', valign: 'middle' });
    });

    // Move to the next row
    yOffset += rowHeight;

    // Draw table data with borders
    bills.forEach((bill, index) => {
      const rowData = [
        (index + 1).toString(),
        bill.title,
        `$${bill.amount}`
      ];

      // Add amount to total
      totalAmount += parseFloat(bill.amount);

      rowData.forEach((cellData, columnIndex) => {
        // Draw cell with borders
        doc.rect(margin + columnWidths.slice(0, columnIndex).reduce((sum, width) => sum + width, 0), yOffset, columnWidths[columnIndex], rowHeight);
        doc.text(cellData, margin + columnWidths.slice(0, columnIndex).reduce((sum, width) => sum + width, 0) + columnWidths[columnIndex] / 2, yOffset + rowHeight / 2, { align: 'center', valign: 'middle' });
      });

      // Move to the next row
      yOffset += rowHeight;
    });

    // Add total amount
    doc.text(`Total Amount: $${totalAmount.toFixed(2)}`, margin, yOffset + 10);

    // Save the PDF
    doc.save('all_bills.pdf');
  };



  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div style={{ textAlign: 'center', paddingTop: '60px' }}>
        <h1 style={{ marginTop: '-20px' }}>Billing App</h1>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '20px', border: '1px solid #dee2e6', borderRadius: '5px', width: '50%', background: '#f8f9fa' }}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              style={{ marginRight: '10px', flex: 1 }}
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              style={{ marginRight: '10px', flex: 1 }}
            />
            <button onClick={handleAddBill} style={{ marginLeft: '10px', padding: '0.375rem 0.75rem', border: '1px solid transparent', borderRadius: '0.25rem', background: '#007bff', color: '#fff' }}>Add Bill</button>
          </div>
        </div>
        <table id="bill-table" style={{ width: '50%', margin: 'auto', marginTop: '40px', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #dee2e6', padding: '10px' }}>Title</th>
              <th style={{ border: '1px solid #dee2e6', padding: '10px' }}>Amount</th>
              <th style={{ border: '1px solid #dee2e6', padding: '10px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bills.map(bill => (
              <tr key={bill._id}>
                <td style={{ border: '1px solid #dee2e6', padding: '10px' }}>{bill.title}</td>
                <td style={{ border: '1px solid #dee2e6', padding: '10px' }}>{bill.amount}</td>
                <td style={{ border: '1px solid #dee2e6', padding: '10px' }}>
                  <button onClick={() => handleDownloadBill(bill)} style={{ padding: '0.375rem 0.75rem', border: '1px solid transparent', borderRadius: '0.25rem', background: '#28a745', color: '#fff', marginRight: '5px' }}>Download</button>
                  <button onClick={() => handleDeleteBill(bill._id)} style={{ padding: '0.375rem 0.75rem', border: '1px solid transparent', borderRadius: '0.25rem', background: '#dc3545', color: '#fff' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleDownloadAllBills} style={{ marginTop: '20px', padding: '0.375rem 0.75rem', border: '1px solid transparent', borderRadius: '0.25rem', background: '#007bff', color: '#fff' }}>Download All Bills</button>
      </div>
    </div>
  );
}

export default Bill;
