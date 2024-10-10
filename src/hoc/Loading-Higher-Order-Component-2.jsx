import React, { useState, useEffect } from 'react';

import * as reportService from '../../services/reportService';
import ReportGenerator from './ReportGenerator/ReportGenerator';
import ReportList from './ReportList/ReportList';

import IsLoadingHOC from '../../hoc/IsLoadingHOC';


// https://blog.bitsrc.io/building-a-universal-higher-order-component-page-loader-for-your-react-app-46d74f7a6958
export const ReportPage = props => {
    const { setLoading } = props;
    const [files, setFiles] = useState([]);

    useEffect(() => {
        setLoading(false);

    }, []);

    const generateReport = async reportData => {
        setLoading(true);

        await reportService.generateReport(reportData);
        setLoading(false);
    };

    const downloadFile = async path => {
        await reportService.downloadReport(path);

    };

    return (
        <div className="report-container">
            <header className="list-header">
                <div className="report-title">Reports</div>
            </header>
            <div className="report">
                <ReportGenerator generateReport={generateReport} />
                <ReportList files={files} downloadFile={downloadFile} />
            </div>
        </div>
    );
};

export default IsLoadingHOC(ReportPage, 'Please wait as we load your data.');
