import React, { useEffect, useState } from "react";

const OngoingAidRequests: React.FC = () => {
  const [requests, setRequests] = useState<any[]>([]);
  const [removedMessage, setRemovedMessage] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    // Dummy data for development/demo
    const dummy = [
      {
        aid_id: 101,
        full_name: "John Doe",
        contact_no: "0771234567",
        type_of_support: "Flood Relief",
        description: "Flood relief needed in area.",
        contributions_received: 5,
        resolved: false
      },
      {
        aid_id: 102,
        full_name: "Jane Smith",
        contact_no: "0719876543",
        type_of_support: "Medical Aid",
        description: "Medical aid required for injured.",
        contributions_received: 2,
        resolved: false
      }
    ];
    setRequests(dummy);
    setLoading(false);
    // Uncomment below to use API instead of dummy data
    // fetch("http://localhost:5158/AidRequest/ongoing")
    //   .then(res => {
    //     if (!res.ok) throw new Error("Failed to fetch ongoing aid requests");
    //     return res.json();
    //   })
    //   .then(data => {
    //     setRequests(data);
    //     setLoading(false);
    //   })
    //   .catch(err => {
    //     setError(err.message);
    //     setLoading(false);
    //   });
  }, []);

  const handleResolvedChange = (idx: number) => {
    setRequests(prev => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], resolved: true };
      return updated;
    });
    setTimeout(() => {
      setRequests(prev => prev.filter((_, i) => i !== idx));
      setRemovedMessage("Aid request marked as resolved and removed.");
      setTimeout(() => setRemovedMessage("") , 2500);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-8 px-4 md:px-12 font-sans flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto p-0 md:p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 transition-all duration-300 relative">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Ongoing Aid Requests</h1>
          {loading ? (
            <div className="text-center text-lg text-gray-500">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : requests.length === 0 ? (
            <div className="text-center text-gray-500">No ongoing aid requests found.</div>
          ) : (
            <table className="w-full mt-6 border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  {/* Aid ID column removed */}
                  <th className="py-2 px-4 border">Full Name</th>
                  <th className="py-2 px-4 border">Contact No</th>
                  <th className="py-2 px-4 border">Type of Support</th>
                  <th className="py-2 px-4 border">Description</th>
                  <th className="py-2 px-4 border">No of Contributions Received</th>
                  <th className="py-2 px-4 border">Mark as Resolved</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req, idx) => (
                  <tr key={req.aid_id} className="hover:bg-blue-50">
                    {/* Aid ID cell removed */}
                    <td className="py-2 px-4 border">{req.full_name}</td>
                    <td className="py-2 px-4 border">{req.contact_no}</td>
                    <td className="py-2 px-4 border">{req.type_of_support}</td>
                    <td className="py-2 px-4 border">{req.description}</td>
                    <td className="py-2 px-4 border font-bold text-blue-600">{req.contributions_received}</td>
                    <td className="py-2 px-4 border text-center">
                      <input
                        type="checkbox"
                        checked={req.resolved}
                        onChange={() => handleResolvedChange(idx)}
                        className="w-5 h-5 accent-green-600"
                      />
                      {/* Only show tick in overlay, not in table row */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {/* ...existing code... */}
        <div className="w-full mt-6 border-collapse relative">
          {removedMessage && (
            <>
              <div className="absolute inset-0 bg-black bg-opacity-30 z-40 transition-opacity animate-fadeIn"></div>
              <div className="absolute inset-0 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl shadow-xl px-10 py-8 flex flex-col items-center animate-fadeIn">
                  <div className="text-green-600 text-3xl mb-4 font-bold">✔</div>
                  <div className="text-2xl font-semibold mb-4">{removedMessage}</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OngoingAidRequests;
