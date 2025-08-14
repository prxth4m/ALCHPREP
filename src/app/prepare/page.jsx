"use client"
import React, { useState, useMemo } from 'react';
import { Search, Filter, Globe, BookOpen, Clock, Users, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { Header } from '@/components/header';
import LenisProvider from '@/components/ui/lenisProvider';

// Map countries to their flag emojis and codes
const countryData = {
    'International': { code: 'INT', flag: '🌍' },
    'United States': { code: 'US', flag: '🇺🇸' },
    'United Kingdom': { code: 'UK', flag: '🇬🇧' },
    'India': { code: 'IN', flag: '🇮🇳' },
    'China': { code: 'CN', flag: '🇨🇳' },
    'Canada': { code: 'CA', flag: '🇨🇦' },
    'Australia': { code: 'AU', flag: '🇦🇺' },
    'Germany': { code: 'DE', flag: '🇩🇪' },
    'France': { code: 'FR', flag: '🇫🇷' },
    'Japan': { code: 'JP', flag: '🇯🇵' },
};

// Placeholder for exam logos
const examLogos = {
    'SAT': '/logos/sat.svg',
    'GRE': '/logos/gre.svg',
    'GMAT': '/logos/gmat.svg',
    'IELTS': '/logos/ielts.svg',
    'TOEFL': '/logos/toefl.svg',
    'MCAT': '/logos/mcat.svg',
    'LSAT': '/logos/lsat.svg',
    'AP': '/logos/ap.svg',
    'ACT': '/logos/act.svg',
    'A-Levels': '/logos/alevels.svg',
    'GCSE': '/logos/gcse.svg',
    'UCAT': '/logos/ucat.svg',
    'JEE': '/logos/jee.svg',
    'NEET': '/logos/neet.svg',
    'CAT': '/logos/cat.svg',
    'UPSC': '/logos/upsc.svg',
    'Gaokao': '/logos/gaokao.svg',
    'HSK': '/logos/hsk.svg',
    'ATAR': '/logos/atar.svg',
    'GAMSAT': '/logos/gamsat.svg',
    'TestDaF': '/logos/testdaf.svg',
    'Abitur': '/logos/abitur.svg',
    'Baccalauréat': '/logos/baccalaureat.svg',
    'DELF/DALF': '/logos/delfdalf.svg',
    'JLPT': '/logos/jlpt.svg',
    'EJU': '/logos/eju.svg',
};

const ExamPrepLanding = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedNationality, setSelectedNationality] = useState('all');

    const exams = [
        { id: 1, name: 'SAT', fullName: 'Scholastic Assessment Test', nationality: 'International', category: 'Undergraduate Admission', difficulty: 'Medium', duration: '3h', participants: '2M+' },
        { id: 2, name: 'GRE', fullName: 'Graduate Record Examination', nationality: 'International', category: 'Graduate Admission', difficulty: 'Hard', duration: '3h 45m', participants: '500K+' },
        { id: 3, name: 'GMAT', fullName: 'Graduate Management Admission Test', nationality: 'International', category: 'Business School', difficulty: 'Hard', duration: '3h 7m', participants: '200K+' },
        { id: 4, name: 'IELTS', fullName: 'International English Language Testing System', nationality: 'International', category: 'Language Proficiency', difficulty: 'Medium', duration: '2h 45m', participants: '3M+' },
        { id: 5, name: 'TOEFL', fullName: 'Test of English as a Foreign Language', nationality: 'International', category: 'Language Proficiency', difficulty: 'Medium', duration: '3h', participants: '800K+' },
        { id: 6, name: 'MCAT', fullName: 'Medical College Admission Test', nationality: 'United States', category: 'Medical School', difficulty: 'Very Hard', duration: '7h 30m', participants: '85K+' },
        { id: 7, name: 'LSAT', fullName: 'Law School Admission Test', nationality: 'United States', category: 'Law School', difficulty: 'Hard', duration: '3h 35m', participants: '150K+' },
        { id: 8, name: 'AP', fullName: 'Advanced Placement', nationality: 'United States', category: 'High School', difficulty: 'Medium', duration: '3h', participants: '5M+' },
        { id: 9, name: 'ACT', fullName: 'American College Testing', nationality: 'United States', category: 'Undergraduate Admission', difficulty: 'Medium', duration: '3h 35m', participants: '1.8M+' },
        { id: 10, name: 'A-Levels', fullName: 'Advanced Level', nationality: 'United Kingdom', category: 'High School', difficulty: 'Hard', duration: 'Varies', participants: '300K+' },
        { id: 11, name: 'GCSE', fullName: 'General Certificate of Secondary Education', nationality: 'United Kingdom', category: 'Secondary School', difficulty: 'Medium', duration: 'Varies', participants: '600K+' },
        { id: 12, name: 'UCAT', fullName: 'University Clinical Aptitude Test', nationality: 'United Kingdom', category: 'Medical School', difficulty: 'Hard', duration: '2h', participants: '25K+' },
        { id: 13, name: 'JEE', fullName: 'Joint Entrance Examination', nationality: 'India', category: 'Engineering', difficulty: 'Very Hard', duration: '3h', participants: '1M+' },
        { id: 14, name: 'NEET', fullName: 'National Eligibility Entrance Test', nationality: 'India', category: 'Medical', difficulty: 'Very Hard', duration: '3h 20m', participants: '1.6M+' },
        { id: 15, name: 'CAT', fullName: 'Common Admission Test', nationality: 'India', category: 'Management', difficulty: 'Very Hard', duration: '3h', participants: '200K+' },
        { id: 16, name: 'UPSC', fullName: 'Union Public Service Commission', nationality: 'India', category: 'Civil Services', difficulty: 'Extremely Hard', duration: 'Multiple stages', participants: '400K+' },
        { id: 17, name: 'Gaokao', fullName: 'National College Entrance Examination', nationality: 'China', category: 'University Admission', difficulty: 'Very Hard', duration: '2-3 days', participants: '10M+' },
        { id: 18, name: 'HSK', fullName: 'Hanyu Shuiping Kaoshi', nationality: 'China', category: 'Language Proficiency', difficulty: 'Medium', duration: 'Varies', participants: '600K+' },
        { id: 19, name: 'MCAT', fullName: 'Medical College Admission Test (Canada)', nationality: 'Canada', category: 'Medical School', difficulty: 'Very Hard', duration: '7h 30m', participants: '15K+' },
        { id: 20, name: 'LSAT', fullName: 'Law School Admission Test (Canada)', nationality: 'Canada', category: 'Law School', difficulty: 'Hard', duration: '3h 35m', participants: '8K+' },
        { id: 21, name: 'ATAR', fullName: 'Australian Tertiary Admission Rank', nationality: 'Australia', category: 'University Admission', difficulty: 'Hard', duration: 'Year-long', participants: '150K+' },
        { id: 22, name: 'GAMSAT', fullName: 'Graduate Medical School Admissions Test', nationality: 'Australia', category: 'Medical School', difficulty: 'Very Hard', duration: '5h 30m', participants: '5K+' },
        { id: 23, name: 'TestDaF', fullName: 'Test Deutsch als Fremdsprache', nationality: 'Germany', category: 'Language Proficiency', difficulty: 'Medium', duration: '3h 10m', participants: '30K+' },
        { id: 24, name: 'Abitur', fullName: 'Abitur', nationality: 'Germany', category: 'University Entrance', difficulty: 'Hard', duration: 'Multiple exams', participants: '400K+' },
        { id: 25, name: 'Baccalauréat', fullName: 'Baccalauréat', nationality: 'France', category: 'High School Diploma', difficulty: 'Hard', duration: 'Multiple exams', participants: '700K+' },
        { id: 26, name: 'DELF/DALF', fullName: 'Diplôme d\'Etudes en Langue Française', nationality: 'France', category: 'Language Proficiency', difficulty: 'Medium', duration: '4h', participants: '400K+' },
        { id: 27, name: 'JLPT', fullName: 'Japanese Language Proficiency Test', nationality: 'Japan', category: 'Language Proficiency', difficulty: 'Medium', duration: '3h 25m', participants: '700K+' },
        { id: 28, name: 'EJU', fullName: 'Examination for Japanese University Admission', nationality: 'Japan', category: 'University Admission', difficulty: 'Hard', duration: '4h 40m', participants: '30K+' },
    ];

    const nationalities = ['all', ...Array.from(new Set(exams.map(exam => exam.nationality)))];

    const filteredExams = useMemo(() => {
        return exams.filter(exam => {
            const matchesSearch = exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                exam.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                exam.category.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesNationality = selectedNationality === 'all' || exam.nationality === selectedNationality;
            return matchesSearch && matchesNationality;
        });
    }, [searchTerm, selectedNationality, exams]);

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Medium': return 'bg-yellow-800/20 text-yellow-300 border-yellow-700/50';
            case 'Hard': return 'bg-orange-800/20 text-orange-300 border-orange-700/50';
            case 'Very Hard': return 'bg-red-800/20 text-red-300 border-red-700/50';
            case 'Extremely Hard': return 'bg-red-900/20 text-red-400 border-red-800/50';
            default: return 'bg-green-800/20 text-green-300 border-green-700/50';
        }
    };

    return (
      <LenisProvider>
         <div className="min-h-screen  bg-zinc-950 text-white font-sans">
            <Header/>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
                {/* Background gradient effect */}
                <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                    <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-300 via-white to-purple-300 bg-clip-text text-transparent leading-tight">
                        Your Path to Success, Exam by Exam
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-3xl mx-auto font-light">
                        Discover, prepare for, and ace any exam, from global college admissions to local civil services.
                    </p>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-8 px-4 sm:px-6 lg:px-8 bg-zinc-900 shadow-2xl z-10 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                        {/* Search Bar */}
                        <div className="flex-1 relative z-10">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                            <input
                                type="text"
                                placeholder="Search exams by name, category, or keyword..."
                                className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-md text-white rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 font-light"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Nationality Filter */}
                        <div className="relative min-w-[200px] z-10">
                            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
                            <select
                                className="w-full pl-12 pr-4 py-3 bg-white/5 backdrop-blur-md text-white rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer transition-all duration-300 font-light"
                                value={selectedNationality}
                                onChange={(e) => setSelectedNationality(e.target.value)}
                            >
                                {nationalities.map(nationality => (
                                    <option key={nationality} value={nationality} className="bg-zinc-900 text-white">
                                        {nationality === 'all' ? 'All Countries' : `${countryData[nationality]?.flag} ${nationality}`}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mb-6 text-center">
                        <p className="text-zinc-400 text-sm font-light">
                            Showing {filteredExams.length} exam{filteredExams.length !== 1 ? 's' : ''}
                        </p>
                    </div>
                </div>
            </section>

            {/* Exam Cards Grid */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredExams.map((exam) => (
                            <div
                                key={exam.id}
                                className="relative bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col"
                            >
                                {/* Glassy overlay for a subtle effect */}
                                <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
                                        border: '1px solid rgba(255, 255, 255, 0.18)',
                                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                                    }}
                                ></div>

                                {/* Card content */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Header and Logo */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="relative w-12 h-12 flex-shrink-0">
                                                {/* Replace with actual logo image component */}
                                                <div className="w-12 h-12 bg-zinc-700 rounded-full flex items-center justify-center text-xs font-bold text-white uppercase">
                                                    {exam.name.slice(0, 2)}
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-0.5">{exam.name}</h3>
                                                <p className="text-sm text-zinc-400 font-light">{exam.fullName}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="space-y-3 mt-auto mb-6">
                                        <div className="flex items-center text-sm text-zinc-300 font-light">
                                            <span className="mr-2">{countryData[exam.nationality]?.flag}</span>
                                            {exam.nationality} ({countryData[exam.nationality]?.code})
                                        </div>
                                        <div className="flex items-center text-sm text-zinc-300 font-light">
                                            <BookOpen className="w-4 h-4 mr-2 text-zinc-500" />
                                            {exam.category}
                                        </div>
                                        <div className="flex items-center text-sm text-zinc-300 font-light">
                                            <Clock className="w-4 h-4 mr-2 text-zinc-500" />
                                            {exam.duration}
                                        </div>
                                        <div className="flex items-center text-sm text-zinc-300 font-light">
                                            <Users className="w-4 h-4 mr-2 text-zinc-500" />
                                            {exam.participants} annually
                                        </div>
                                    </div>

                                    {/* Difficulty Badge and Action Button */}
                                    <div className="flex justify-between items-center mt-auto">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(exam.difficulty)}`}>
                                            {exam.difficulty}
                                        </span>
                                        <button className="flex items-center px-4 py-2 bg-white/10 text-white rounded-full text-sm font-semibold hover:bg-white/20 transition-colors duration-300">
                                            Start Prep
                                            <ChevronRight className="w-4 h-4 ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredExams.length === 0 && (
                        <div className="text-center py-16">
                            <BookOpen className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-zinc-300 mb-2">No exams found</h3>
                            <p className="text-zinc-400 font-light">Try adjusting your search terms or filters</p>
                        </div>
                    )}
                </div>
            </section>
            <Footer/>
        </div>
      </LenisProvider> 
    );
};

export default ExamPrepLanding;