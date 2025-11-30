import React, { useState } from 'react';
import { X, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface ReportConfigProps {
  initialData?: any;
  availableSources: { id: string, label: string }[];
  onSave: (data: any) => void;
  onCancel: () => void;
}

export function ReportConfiguration({ initialData, availableSources, onSave, onCancel }: ReportConfigProps) {
  const [description, setDescription] = useState(initialData?.description || '');
  const [questions, setQuestions] = useState<string[]>(initialData?.questions || ['']);
  
  // referenceData is stored as array of source IDs
  const [referenceData, setReferenceData] = useState<string[]>(
      Array.isArray(initialData?.referenceData) ? initialData.referenceData : []
  );
  
  const [summaryMethod, setSummaryMethod] = useState(initialData?.summaryMethod || '');

  const handleAddQuestion = () => {
    setQuestions([...questions, '']);
  };

  const handleRemoveQuestion = (index: number) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const handleAddReference = (sourceId: string) => {
      if (sourceId && !referenceData.includes(sourceId)) {
          setReferenceData([...referenceData, sourceId]);
      }
  };

  const handleRemoveReference = (index: number) => {
      const newData = [...referenceData];
      newData.splice(index, 1);
      setReferenceData(newData);
  };

  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[20px] w-[800px] max-h-[90vh] overflow-y-auto shadow-2xl p-8 relative">
        <h2 className="font-bold text-[32px] mb-6 text-black">Report Setting</h2>
        
        <div className="space-y-6">
            <h3 className="text-[#0009ad] text-[24px] font-bold">AI Flow Summary Prompt</h3>
            
            {/* Flow Description */}
            <div className="grid grid-cols-[168px_1fr] items-start gap-4">
                <Label className="text-[18px] font-light text-[#484848] pt-2">
                    <span className="text-[#940000] mr-1">*</span>
                    Flow Description
                </Label>
                <Textarea 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    className="h-[97px] rounded-[10px] border-[#cfcfcf]" 
                />
            </div>

            {/* Sample Questions */}
            <div className="grid grid-cols-[168px_1fr] items-start gap-4">
                <Label className="text-[18px] font-light text-[#484848] pt-2">
                    <span className="text-[#940000] mr-1">*</span>
                    Sample Questions
                </Label>
                <div className="space-y-2">
                    {questions.map((q, i) => (
                        <div key={i} className="relative flex items-center">
                            <Input 
                                value={q} 
                                onChange={(e) => handleQuestionChange(i, e.target.value)}
                                className="h-[31px] rounded-[10px] border-[#cfcfcf] pr-8" 
                            />
                            {questions.length > 1 && (
                                <button 
                                    onClick={() => handleRemoveQuestion(i)}
                                    className="absolute right-[-30px] text-[#9D9D9D] hover:text-red-500"
                                >
                                    <X size={20} />
                                </button>
                            )}
                        </div>
                    ))}
                    <button onClick={handleAddQuestion} className="mt-2">
                        <div className="bg-gray-100 rounded-full p-1 hover:bg-gray-200">
                            <Plus size={20} className="text-[#9D9D9D]" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Reference Data */}
            <div className="grid grid-cols-[168px_1fr] items-start gap-4">
                <Label className="text-[18px] font-light text-[#484848] pt-2">
                    <span className="text-[#940000] mr-1">*</span>
                    Reference Data
                </Label>
                <div className="space-y-2">
                    {/* List of selected references */}
                    {referenceData.map((refId, i) => {
                        const source = availableSources.find(s => s.id === refId);
                        const label = source ? source.label : `Unknown Source (${refId})`;
                        return (
                            <div key={i} className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-[10px] border border-[#cfcfcf]">
                                <span className="text-[#323232]">{label}</span>
                                <button 
                                    onClick={() => handleRemoveReference(i)}
                                    className="text-[#9D9D9D] hover:text-red-500"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        );
                    })}

                    {/* Dropdown to add new reference */}
                    <select 
                        className="w-full h-[34px] rounded-[10px] border border-[#cfcfcf] px-3 bg-white"
                        onChange={(e) => handleAddReference(e.target.value)}
                        value=""
                    >
                        <option value="" disabled>+ Add Reference from upstream blocks</option>
                        {availableSources.filter(s => !referenceData.includes(s.id)).map(s => (
                            <option key={s.id} value={s.id}>
                                {s.label}
                            </option>
                        ))}
                    </select>
                    {availableSources.length === 0 && (
                        <p className="text-sm text-orange-500">Connect upstream blocks to this Report block to see them here.</p>
                    )}
                </div>
            </div>

            {/* How to Summary */}
            <div className="grid grid-cols-[168px_1fr] items-start gap-4">
                <Label className="text-[18px] font-light text-[#484848] pt-2">
                    <span className="text-[#940000] mr-1">*</span>
                    How to Summary
                </Label>
                <Textarea 
                    value={summaryMethod} 
                    onChange={(e) => setSummaryMethod(e.target.value)}
                    className="h-[123px] rounded-[10px] border-[#cfcfcf]" 
                />
            </div>

             {/* Chart Setting */}
             <div className="pt-4">
                <h3 className="text-[#0009ad] text-[24px] font-bold mb-2">Chart Setting</h3>
                <p className="text-[#484848] text-[18px]">(under construction)</p>
             </div>

             {/* Buttons */}
             <div className="flex justify-center gap-4 pt-6">
                <Button 
                    variant="secondary" 
                    onClick={onCancel}
                    className="w-[139px] h-[43px] text-[20px] bg-[#e8e8e8] text-[#484848] hover:bg-gray-300"
                >
                    Cancel
                </Button>
                <Button 
                    onClick={() => onSave({ description, questions, referenceData, summaryMethod })}
                    className="w-[139px] h-[43px] text-[20px] bg-[#1d89ff] text-white hover:bg-blue-600"
                >
                    Save
                </Button>
             </div>
        </div>
      </div>
    </div>
  );
}
