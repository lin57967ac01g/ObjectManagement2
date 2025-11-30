import React, { useState, useEffect } from 'react';
import { Case, IntentionResult, ChatMessage } from './types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// --- Icons ---
function SendIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M26.3763 11.9527L2.19125 0.153985C1.95884 0.0407269 1.70142 -0.0115315 1.44324 0.00212854C1.18506 0.0157886 0.934602 0.0949177 0.715436 0.232069C0.49627 0.369219 0.315605 0.559881 0.190446 0.78611C0.0652865 1.01234 -0.000251201 1.26669 7.23554e-07 1.52524V1.56899C0.000124511 1.77337 0.0253124 1.97698 0.0750007 2.17524L2.395 11.4552C2.4261 11.5789 2.49426 11.69 2.59033 11.7738C2.6864 11.8576 2.8058 11.91 2.9325 11.924L13.1288 13.0577C13.2984 13.0781 13.4547 13.16 13.5681 13.2878C13.6815 13.4157 13.7441 13.5806 13.7441 13.7515C13.7441 13.9224 13.6815 14.0873 13.5681 14.2151C13.4547 14.343 13.2984 14.4248 13.1288 14.4452L2.9325 15.579C2.8058 15.593 2.6864 15.6454 2.59033 15.7292C2.49426 15.813 2.4261 15.9241 2.395 16.0477L0.0750007 25.3265C0.0253124 25.5247 0.000124511 25.7283 7.23554e-07 25.9327V25.9765C-3.90326e-05 26.2349 0.0656535 26.4891 0.190901 26.7152C0.316148 26.9412 0.496834 27.1317 0.715966 27.2687C0.935099 27.4057 1.18548 27.4848 1.44356 27.4984C1.70163 27.512 1.95893 27.4597 2.19125 27.3465L26.375 15.5477C26.7118 15.3834 26.9957 15.1278 27.1942 14.81C27.3928 14.4922 27.4981 14.125 27.4981 13.7502C27.4981 13.3755 27.3928 13.0083 27.1942 12.6905C26.9957 12.3727 26.7131 12.117 26.3763 11.9527Z" fill="#667085"/>
    </svg>
  );
}

interface CaseAnalysisViewProps {
  caseId: string; // The ID of the case being viewed
  intentions: IntentionResult[];
  initialMessages?: ChatMessage[];
  onBack?: () => void;
}

export function CaseAnalysisView({ caseId, intentions, initialMessages = [], onBack }: CaseAnalysisViewProps) {
  const [selectedIntentionId, setSelectedIntentionId] = useState<string>(intentions[0]?.id || '');
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState('');

  const selectedIntention = intentions.find(i => i.id === selectedIntentionId);

  const handleSendMessage = () => {
      if (!inputMessage.trim()) return;
      
      const newMsg: ChatMessage = {
          id: Date.now().toString(),
          sender: 'user',
          text: inputMessage
      };
      setMessages([...messages, newMsg]);
      setInputMessage('');

      // Mock AI Response
      setTimeout(() => {
          setMessages(prev => [...prev, {
              id: (Date.now() + 1).toString(),
              sender: 'ai',
              text: `Here is the answer regarding your query about ${selectedIntention?.name || 'this intention'}...`
          }]);
      }, 1000);
  };

  return (
    <div className="absolute bg-white h-[1020px] left-[320px] top-[60px] right-0 bottom-0 w-[calc(100%-320px)] overflow-hidden flex border-l border-[#cfcfcf]">
        
        {/* Left Panel: Analysis View */}
        <div className="flex-1 bg-[#F4F4F4] p-[20px] overflow-y-auto border-r border-[#cfcfcf]">
            <div className="flex items-center mb-4">
                 {onBack && (
                     <button onClick={onBack} className="mr-2 text-blue-600 hover:underline">← Back</button>
                 )}
                 <h2 className="font-bold text-[32px] text-black">{selectedIntention ? selectedIntention.name : 'Select an Intention'}</h2>
            </div>

            {selectedIntention && (
                <div className="flex flex-col gap-[20px]">
                    {/* Summary */}
                    <div className="bg-white rounded-[20px] p-[20px] border border-[#cfcfcf]">
                        <h3 className="font-bold text-[28px] text-black mb-4">AI Text Summary</h3>
                        <div className="border border-[#cfcfcf] p-4 rounded bg-white min-h-[150px]">
                             <ol className="list-decimal list-inside text-[24px] font-light">
                                {selectedIntention.summaryPoints.map((point, idx) => (
                                    <li key={idx} className="mb-2">{point}</li>
                                ))}
                             </ol>
                        </div>
                    </div>

                    {/* Data Table */}
                    <div className="bg-white rounded-[20px] p-[20px] border border-[#cfcfcf]">
                        <h3 className="font-bold text-[28px] text-black mb-4">Data Table</h3>
                        <div className="border border-[#cfcfcf] p-4 rounded bg-white min-h-[200px] overflow-x-auto">
                             <table className="w-full text-left border-collapse">
                                 <thead>
                                     <tr className="bg-gray-100">
                                         <th className="p-2 border">Metric</th>
                                         <th className="p-2 border">Value</th>
                                         <th className="p-2 border">Change</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                     {selectedIntention.tableData.map((row, idx) => (
                                         <tr key={idx}>
                                             <td className="p-2 border">{row.metric}</td>
                                             <td className="p-2 border">{row.value}</td>
                                             <td className="p-2 border">{row.change}</td>
                                         </tr>
                                     ))}
                                 </tbody>
                             </table>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="bg-white rounded-[20px] p-[20px] border border-[#cfcfcf]">
                        <h3 className="font-bold text-[28px] text-black mb-4">Chart</h3>
                        <div className="border border-[#cfcfcf] p-4 rounded bg-white h-[300px]">
                             <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={selectedIntention.chartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#1d89ff" />
                                </BarChart>
                             </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            )}
        </div>

        {/* Right Panel: Chat */}
        <div className="w-[40%] bg-[#E8E8E8] flex flex-col relative">
             <div className="p-[20px] border-b border-[#cfcfcf]">
                 <h2 className="font-bold text-[32px] text-black">AI Chat</h2>
             </div>
             
             <div className="flex-1 overflow-y-auto p-[30px] flex flex-col gap-[20px]">
                 {/* Diagnosis Script Result Block (Special Message) */}
                 <div className="bg-white rounded-[20px] p-[15px] border border-[#cfcfcf] w-[90%]">
                     <h3 className="font-bold text-[20px] text-black mb-3">Diagnosis Script Result</h3>
                     <div className="flex flex-col gap-[10px]">
                         {intentions.map(intent => (
                             <div 
                                key={intent.id}
                                onClick={() => setSelectedIntentionId(intent.id)}
                                className={`
                                    cursor-pointer rounded-[20px] p-[15px] border transition-colors
                                    ${selectedIntentionId === intent.id 
                                        ? 'bg-[#1d89ff1a] border-[#1d89ff]' 
                                        : 'bg-white border-[#9d9d9d] hover:bg-gray-50'}
                                `}
                             >
                                 <p className="text-[18px] font-normal mb-1">{intent.name}</p>
                                 <p className="text-[14px] text-gray-600">{intent.resultSummary}</p>
                             </div>
                         ))}
                     </div>
                 </div>

                 {/* Chat Messages */}
                 {messages.map(msg => (
                     <div 
                        key={msg.id} 
                        className={`
                            max-w-[80%] p-[20px] rounded-[20px] text-[16px]
                            ${msg.sender === 'user' 
                                ? 'bg-[#edf0ff] self-end text-black' 
                                : 'bg-white self-start text-black border border-[#cfcfcf]'}
                        `}
                     >
                         {msg.text}
                     </div>
                 ))}
             </div>

             {/* Input Area */}
             <div className="p-[30px] pt-0">
                 <div className="bg-white border border-[#e3e3e3] h-[75px] rounded-[20px] flex items-center px-[20px] relative">
                     <input 
                        type="text"
                        placeholder="Write a message"
                        className="flex-1 h-full outline-none text-[18px] text-[#667085] placeholder-[#667085]"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                     />
                     <button onClick={handleSendMessage} className="ml-2 hover:opacity-70">
                         <SendIcon />
                     </button>
                 </div>
             </div>
        </div>

    </div>
  );
}
