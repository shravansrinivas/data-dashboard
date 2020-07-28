import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'jquery';
import 'popper.js';
//import Sunburst from 'react-sunburst-d3-v4';
import 'bootstrap';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
const server = async () => {
    return new Promise((resolve,reject) => {
        setTimeout(
            () => {
                resolve(
                    {
                        status:200,
                        // data:[
                        //     {
                        //         solutionId:1,
                        //         name:"Late Waterbird",
                        //         description:"Late Waterbird",
                        //         lineOfBusiness:"CIB",
                        //         phase:"Ideation",
                        //         prodDate:"05-05-2021",
                        //         solutionTechnologiesUsed:"WinAutomation",
                        //         capabilities:'Analytics',
                        //         certificationStatus:"Not Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Personal Information",
                        //         retirementTargetDate:"01-01-2022"
                        //     },
                        //     {
                        //         solutionId:2,
                        //         name:"Hollow Beam",
                        //         description:"Hollow Beam",
                        //         lineOfBusiness:"CIB",
                        //         phase:"Ideation",
                        //         prodDate:"06-05-2021",
                        //         solutionTechnologiesUsed:"Tableau",
                        //         capabilities:'Adjustments',
                        //         certificationStatus:"Certified",
                        //         classificationRating:"Enhanced",
                        //         informationType:"Client Confidential Information",
                        //         retirementTargetDate:"02-01-2022"
                        //     },
                        //     {
                        //         solutionId:3,
                        //         name:"Rebel Star",
                        //         description:"Rebel Star",
                        //         lineOfBusiness:"CCB",
                        //         phase:"Ideation",
                        //         prodDate:"07-05-2021",
                        //         solutionTechnologiesUsed:"QlikView",
                        //         capabilities:'Quality Validation',
                        //         certificationStatus:"Not Certified",
                        //         classificationRating:"Enhanced",
                        //         informationType:"Workforce Information",
                        //         retirementTargetDate:"03-01-2022"
                        //     },
                        //     {
                        //         solutionId:4,
                        //         name:"Lone Screwdriver",
                        //         description:"Lone Screwdriver",
                        //         lineOfBusiness:"CCB",
                        //         phase:"Ideation",
                        //         prodDate:"08-05-2021",
                        //         solutionTechnologiesUsed:"AutomationAnywhere",
                        //         capabilities:'Data Extraction',
                        //         certificationStatus:"Certified",
                        //         classificationRating:"Enhanced",
                        //         informationType:"Personal Information",
                        //         retirementTargetDate:"04-01-2022"
                        //     },
                        //     {
                        //         solutionId:5,
                        //         name:"Long Eyelid",
                        //         description:"Long Eyelid",
                        //         lineOfBusiness:"AWM",
                        //         phase:"Ideation",
                        //         prodDate:"09-05-2021",
                        //         solutionTechnologiesUsed:"Alteryx",
                        //         capabilities:'Data Enrichment',
                        //         certificationStatus:"Not Certified",
                        //         classificationRating:"Enhanced",
                        //         informationType:"Client Confidential Information",
                        //         retirementTargetDate:"05-01-2022"
                        //     },
                        //     {
                        //         solutionId:6,
                        //         name:"Dusty Cosmetic",
                        //         description:"Dusty Cosmetic",
                        //         lineOfBusiness:"CIB",
                        //         phase:"Ideation",
                        //         prodDate:"10-05-2021",
                        //         solutionTechnologiesUsed:"Cognos",
                        //         capabilities:'Data Transformation',
                        //         certificationStatus:"Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Workforce Information",
                        //         retirementTargetDate:"06-01-2022"
                        //     },
                        //     {
                        //         solutionId:7,
                        //         name:"Scarlet Laser",
                        //         description:"Scarlet Laser",
                        //         lineOfBusiness:"CT",
                        //         phase:"Ideation",
                        //         prodDate:"11-05-2021",
                        //         solutionTechnologiesUsed:"ReportBuilder",
                        //         capabilities:'Data Visualization',
                        //         certificationStatus:"Not Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Personal Information",
                        //         retirementTargetDate:"07-01-2022"
                        //     },
                        //     {
                        //         solutionId:8,
                        //         name:"Maximum Scoreboard",
                        //         description:"Maximum Scoreboard",
                        //         lineOfBusiness:"CT",
                        //         phase:"Ideation",
                        //         prodDate:"12-05-2021",
                        //         solutionTechnologiesUsed:"WinAutomation",
                        //         capabilities:'Data Reporting',
                        //         certificationStatus:"Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Client Confidential Information",
                        //         retirementTargetDate:"08-01-2022"
                        //     },
                        //     {
                        //         solutionId:9,
                        //         name:"Olive Orange Donut",
                        //         description:"Olive Orange Donut",
                        //         lineOfBusiness:"CIB",
                        //         phase:"Ideation",
                        //         prodDate:"13-05-2021",
                        //         solutionTechnologiesUsed:"Tableau",
                        //         capabilities:'Process Automation',
                        //         certificationStatus:"Not Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Workforce Information",
                        //         retirementTargetDate:"09-01-2022"
                        //     },
                        //     {
                        //         solutionId:10,
                        //         name:"Steep Rubber",
                        //         description:"Steep Rubber",
                        //         lineOfBusiness:"CIB",
                        //         phase:"Ideation",
                        //         prodDate:"14-05-2021",
                        //         solutionTechnologiesUsed:"QlikView",
                        //         capabilities:'Other',
                        //         certificationStatus:"Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Personal Information",
                        //         retirementTargetDate:"10-01-2022"
                        //     },
                        //     {
                        //         solutionId:11,
                        //         name:"Silver Gravel",
                        //         description:"Silver Gravel",
                        //         lineOfBusiness:"CIB",
                        //         phase:"Ideation",
                        //         prodDate:"15-05-2021",
                        //         solutionTechnologiesUsed:"AutomationAnywhere",
                        //         capabilities:'Analytics',
                        //         certificationStatus:"Not Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Client Confidential Information",
                        //         retirementTargetDate:"11-01-2022"
                        //     },
                        //     {
                        //         solutionId:12,
                        //         name:"Gloomy Breeze",
                        //         description:"Gloomy Breeze",
                        //         lineOfBusiness:"CIB",
                        //         phase:"Development",
                        //         prodDate:"16-05-2021",
                        //         solutionTechnologiesUsed:"Alteryx",
                        //         capabilities:'Adjustments',
                        //         certificationStatus:"Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Workforce Information",
                        //         retirementTargetDate:"12-01-2022"
                        //     },
                        //     {
                        //         solutionId:13,
                        //         name:"Severe Serpent",
                        //         description:"Severe Serpent",
                        //         lineOfBusiness:"CCB",
                        //         phase:"Development",
                        //         prodDate:"17-05-2021",
                        //         solutionTechnologiesUsed:"Cognos",
                        //         capabilities:'Quality Validation',
                        //         certificationStatus:"Not Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Personal Information",
                        //         retirementTargetDate:"13-01-2022"
                        //     },
                        //     {
                        //         solutionId:14,
                        //         name:"Dead Finger",
                        //         description:"Dead Finger",
                        //         lineOfBusiness:"CCB",
                        //         phase:"Development",
                        //         prodDate:"18-05-2021",
                        //         solutionTechnologiesUsed:"ReportBuilder",
                        //         capabilities:'Data Extraction',
                        //         certificationStatus:"Certified",
                        //         classificationRating:"Enhanced",
                        //         informationType:"Client Confidential Information",
                        //         retirementTargetDate:"14-01-2022"
                        //     },
                        //     {
                        //         solutionId:15,
                        //         name:"Nocturnal Finger",
                        //         description:"Nocturnal Finger",
                        //         lineOfBusiness:"CCB",
                        //         phase:"Development",
                        //         prodDate:"19-05-2021",
                        //         solutionTechnologiesUsed:"WinAutomation",
                        //         capabilities:'Data Enrichment',
                        //         certificationStatus:"Not Certified",
                        //         classificationRating:"Enhanced",
                        //         informationType:"Workforce Information",
                        //         retirementTargetDate:"15-01-2022"
                        //     },
                        //     {
                        //         solutionId:16,
                        //         name:"Eastern Moose",
                        //         description:"Eastern Moose",
                        //         lineOfBusiness:"AWM",
                        //         phase:"Development",
                        //         prodDate:"20-05-2021",
                        //         solutionTechnologiesUsed:"Tableau",
                        //         capabilities:'Data Transformation',
                        //         certificationStatus:"Certified",
                        //         classificationRating:"Enhanced",
                        //         informationType:"Personal Information",
                        //         retirementTargetDate:"16-01-2022"
                        //     },
                        //     {
                        //         solutionId:17,
                        //         name:"Parachute Intense",
                        //         description:"Parachute Intense",
                        //         lineOfBusiness:"CT",
                        //         phase:"Development",
                        //         prodDate:"21-05-2021",
                        //         solutionTechnologiesUsed:"QlikView",
                        //         capabilities:'Data Visualization',
                        //         certificationStatus:"Not Certified",
                        //         classificationRating:"Enhanced",
                        //         informationType:"Client Confidential Information",
                        //         retirementTargetDate:"17-01-2022"
                        //     },
                        //     {
                        //         solutionId:18,
                        //         name:"Pure Venus",
                        //         description:"Pure Venus",
                        //         lineOfBusiness:"CT",
                        //         phase:"Development",
                        //         prodDate:"22-05-2021",
                        //         solutionTechnologiesUsed:"AutomationAnywhere",
                        //         capabilities:'Data Reporting',
                        //         certificationStatus:"Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Workforce Information",
                        //         retirementTargetDate:"18-01-2022"
                        //     },
                        //     {
                        //         solutionId:19,
                        //         name:"Northernmost Harsh Moon",
                        //         description:"Northernmost Harsh Moon",
                        //         lineOfBusiness:"CIB",
                        //         phase:"Production",
                        //         prodDate:"23-05-2021",
                        //         solutionTechnologiesUsed:"Alteryx",
                        //         capabilities:'Process Automation',
                        //         certificationStatus:"Not Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Personal Information",
                        //         retirementTargetDate:"19-01-2022"
                        //     },
                        //     {
                        //         solutionId:20,
                        //         name:"Raw Alpha",
                        //         description:"Raw Alpha",
                        //         lineOfBusiness:"CIB",
                        //         phase:"Production",
                        //         prodDate:"24-05-2021",
                        //         solutionTechnologiesUsed:"Cognos",
                        //         capabilities:'Other',
                        //         certificationStatus:"Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Client Confidential Information",
                        //         retirementTargetDate:"20-01-2022"
                        //     },
                        //     {
                        //         solutionId:21,
                        //         name:"Indigo Star",
                        //         description:"Indigo Star",
                        //         lineOfBusiness:"CCB",
                        //         phase:"Production",
                        //         prodDate:"25-05-2021",
                        //         solutionTechnologiesUsed:"ReportBuilder",
                        //         capabilities:'Analytics',
                        //         certificationStatus:"Not Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Workforce Information",
                        //         retirementTargetDate:"21-01-2022"
                        //     },
                        //     {
                        //         solutionId:22,
                        //         name:"Lucky Obscure",
                        //         description:"Lucky Obscure",
                        //         lineOfBusiness:"CCB",
                        //         phase:"Production",
                        //         prodDate:"26-05-2021",
                        //         solutionTechnologiesUsed:"WinAutomation",
                        //         capabilities:'Adjustments',
                        //         certificationStatus:"Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Personal Information",
                        //         retirementTargetDate:"22-01-2022"
                        //     },
                        //     {
                        //         solutionId:23,
                        //         name:"Unique Tungsten",
                        //         description:"Unique Tungsten",
                        //         lineOfBusiness:"CIB",
                        //         phase:"Production",
                        //         prodDate:"27-05-2021",
                        //         solutionTechnologiesUsed:"Tableau",
                        //         capabilities:'Quality Validation',
                        //         certificationStatus:"Not Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Client Confidential Information",
                        //         retirementTargetDate:"23-01-2022"
                        //     },
                        //     {
                        //         solutionId:24,
                        //         name:"Empty Jupiter",
                        //         description:"Empty Jupiter",
                        //         lineOfBusiness:"CT",
                        //         phase:"Production",
                        //         prodDate:"28-05-2021",
                        //         solutionTechnologiesUsed:"QlikView",
                        //         capabilities:'Data Extraction',
                        //         certificationStatus:"Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Workforce Information",
                        //         retirementTargetDate:"24-01-2022"
                        //     },
                        //     {
                        //         solutionId:25,
                        //         name:"Pure Windshield",
                        //         description:"Pure Windshield",
                        //         lineOfBusiness:"AWM",
                        //         phase:"Production",
                        //         prodDate:"29-05-2021",
                        //         solutionTechnologiesUsed:"cognos",
                        //         capabilities:'Data Enrichment',
                        //         certificationStatus:"Not Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Personal Information",
                        //         retirementTargetDate:"25-01-2022"
                        //     },
                        //     {
                        //         solutionId:26,
                        //         name:"Stormy Laser",
                        //         description:"Stormy Laser",
                        //         lineOfBusiness:"CIB",
                        //         phase:"Production",
                        //         prodDate:"30-05-2021",
                        //         solutionTechnologiesUsed:"Alteryx",
                        //         capabilities:'Data Transformation',
                        //         certificationStatus:"Certified",
                        //         classificationRating:"Enhanced",
                        //         informationType:"Client Confidential Information",
                        //         retirementTargetDate:"26-01-2022"
                        //     },
                        //     {
                        //         solutionId:27,
                        //         name:"Rocky Microphone",
                        //         description:"Rocky Microphone",
                        //         lineOfBusiness:"CIB",
                        //         phase:"Production",
                        //         prodDate:"31-05-2021",
                        //         solutionTechnologiesUsed:"Cognos",
                        //         capabilities:'Data Visualization',
                        //         certificationStatus:"Not Certified",
                        //         classificationRating:"Enhanced",
                        //         informationType:"Workforce Information",
                        //         retirementTargetDate:"27-01-2022"
                        //     },
                        //     {
                        //         solutionId:28,
                        //         name:"Autumn Restless",
                        //         description:"Autumn Restless",
                        //         lineOfBusiness:"CIB",
                        //         phase:"Retired",
                        //         prodDate:"01-06-2021",
                        //         solutionTechnologiesUsed:"ReportBuilder",
                        //         capabilities:'Data Reporting',
                        //         certificationStatus:"Certified",
                        //         classificationRating:"Enhanced",
                        //         informationType:"Personal Information",
                        //         retirementTargetDate:"28-01-2022"
                        //     },
                        //     {
                        //         solutionId:29,
                        //         name:"Sticky Windshield",
                        //         description:"Sticky Windshield",
                        //         lineOfBusiness:"CCB",
                        //         phase:"Retired",
                        //         prodDate:"02-06-2021",
                        //         solutionTechnologiesUsed:"WinAutomation",
                        //         capabilities:'Process Automation',
                        //         certificationStatus:"Not Certified",
                        //         classificationRating:"Enhanced",
                        //         informationType:"Client Confidential Information",
                        //         retirementTargetDate:"29-01-2022"
                        //     },
                        //     {
                        //         solutionId:30,
                        //         name:"Trombone Furious",
                        //         description:"Trombone Furious",
                        //         lineOfBusiness:"CT",
                        //         phase:"Retired",
                        //         prodDate:"03-06-2021",
                        //         solutionTechnologiesUsed:"Tableau",
                        //         capabilities:'Other',
                        //         certificationStatus:"Certified",
                        //         classificationRating:"Baseline",
                        //         informationType:"Workforce Information",
                        //         retirementTargetDate:"30-01-2022"
                        //     },
                        // ]
                        data:[
                            {
                                solutionId:1,
                                name:"Late Waterbird",
                                description:"Late Waterbird",
                                lineOfBusiness:"CIB",
                                phase:"Ideation",
                                prodDate:"05-05-2021",
                                solutionTechnologiesUsed:"WinAutomation",
                                capabilities:'Anlyts',
                                certificationStatus:"Not Certified",
                                classificationRating:"Baseline",
                                informationType:"Personal Information",
                                retirementTargetDate:"01-01-2022"
                            },
                            {
                                solutionId:2,
                                name:"Hollow Beam",
                                description:"Hollow Beam",
                                lineOfBusiness:"CIB",
                                phase:"Ideation",
                                prodDate:"06-05-2021",
                                solutionTechnologiesUsed:"Tableau",
                                capabilities:'Adjstmts',
                                certificationStatus:"Certified",
                                classificationRating:"Enhanced",
                                informationType:"Client Confidential Information",
                                retirementTargetDate:"02-01-2022"
                            },
                            {
                                solutionId:3,
                                name:"Rebel Star",
                                description:"Rebel Star",
                                lineOfBusiness:"CCB",
                                phase:"Ideation",
                                prodDate:"07-05-2021",
                                solutionTechnologiesUsed:"QlikView",
                                capabilities:'Qlty Vld',
                                certificationStatus:"Not Certified",
                                classificationRating:"Enhanced",
                                informationType:"Workforce Information",
                                retirementTargetDate:"03-01-2022"
                            },
                            {
                                solutionId:4,
                                name:"Lone Screwdriver",
                                description:"Lone Screwdriver",
                                lineOfBusiness:"CCB",
                                phase:"Ideation",
                                prodDate:"08-05-2021",
                                solutionTechnologiesUsed:"AutomationAnywhere",
                                capabilities:'Data Ex.',
                                certificationStatus:"Certified",
                                classificationRating:"Enhanced",
                                informationType:"Personal Information",
                                retirementTargetDate:"04-01-2022"
                            },
                            {
                                solutionId:5,
                                name:"Long Eyelid",
                                description:"Long Eyelid",
                                lineOfBusiness:"AWM",
                                phase:"Ideation",
                                prodDate:"09-05-2021",
                                solutionTechnologiesUsed:"Alteryx",
                                capabilities:'Data En',
                                certificationStatus:"Not Certified",
                                classificationRating:"Enhanced",
                                informationType:"Client Confidential Information",
                                retirementTargetDate:"05-01-2022"
                            },
                            {
                                solutionId:6,
                                name:"Dusty Cosmetic",
                                description:"Dusty Cosmetic",
                                lineOfBusiness:"CIB",
                                phase:"Ideation",
                                prodDate:"10-05-2021",
                                solutionTechnologiesUsed:"Cognos",
                                capabilities:'Data Tr',
                                certificationStatus:"Certified",
                                classificationRating:"Baseline",
                                informationType:"Workforce Information",
                                retirementTargetDate:"06-01-2022"
                            },
                            {
                                solutionId:7,
                                name:"Scarlet Laser",
                                description:"Scarlet Laser",
                                lineOfBusiness:"CT",
                                phase:"Ideation",
                                prodDate:"11-05-2021",
                                solutionTechnologiesUsed:"ReportBuilder",
                                capabilities:'Data Vi',
                                certificationStatus:"Not Certified",
                                classificationRating:"Baseline",
                                informationType:"Personal Information",
                                retirementTargetDate:"07-01-2022"
                            },
                            {
                                solutionId:8,
                                name:"Maximum Scoreboard",
                                description:"Maximum Scoreboard",
                                lineOfBusiness:"CT",
                                phase:"Ideation",
                                prodDate:"12-05-2021",
                                solutionTechnologiesUsed:"WinAutomation",
                                capabilities:'Data Re',
                                certificationStatus:"Certified",
                                classificationRating:"Baseline",
                                informationType:"Client Confidential Information",
                                retirementTargetDate:"08-01-2022"
                            },
                            {
                                solutionId:9,
                                name:"Olive Orange Donut",
                                description:"Olive Orange Donut",
                                lineOfBusiness:"CIB",
                                phase:"Ideation",
                                prodDate:"13-05-2021",
                                solutionTechnologiesUsed:"Tableau",
                                capabilities:'Prcs Autmn',
                                certificationStatus:"Not Certified",
                                classificationRating:"Baseline",
                                informationType:"Workforce Information",
                                retirementTargetDate:"09-01-2022"
                            },
                            {
                                solutionId:10,
                                name:"Steep Rubber",
                                description:"Steep Rubber",
                                lineOfBusiness:"CIB",
                                phase:"Ideation",
                                prodDate:"14-05-2021",
                                solutionTechnologiesUsed:"QlikView",
                                capabilities:'Other',
                                certificationStatus:"Certified",
                                classificationRating:"Baseline",
                                informationType:"Personal Information",
                                retirementTargetDate:"10-01-2022"
                            },
                            {
                                solutionId:11,
                                name:"Silver Gravel",
                                description:"Silver Gravel",
                                lineOfBusiness:"CIB",
                                phase:"Ideation",
                                prodDate:"15-05-2021",
                                solutionTechnologiesUsed:"AutomationAnywhere",
                                capabilities:'Anlyts',
                                certificationStatus:"Not Certified",
                                classificationRating:"Baseline",
                                informationType:"Client Confidential Information",
                                retirementTargetDate:"11-01-2022"
                            },
                            {
                                solutionId:12,
                                name:"Gloomy Breeze",
                                description:"Gloomy Breeze",
                                lineOfBusiness:"CIB",
                                phase:"Development",
                                prodDate:"16-05-2021",
                                solutionTechnologiesUsed:"Alteryx",
                                capabilities:'Adjstmts',
                                certificationStatus:"Certified",
                                classificationRating:"Baseline",
                                informationType:"Workforce Information",
                                retirementTargetDate:"12-01-2022"
                            },
                            {
                                solutionId:13,
                                name:"Severe Serpent",
                                description:"Severe Serpent",
                                lineOfBusiness:"CCB",
                                phase:"Development",
                                prodDate:"17-05-2021",
                                solutionTechnologiesUsed:"Cognos",
                                capabilities:'Qlty Vld',
                                certificationStatus:"Not Certified",
                                classificationRating:"Baseline",
                                informationType:"Personal Information",
                                retirementTargetDate:"13-01-2022"
                            },
                            {
                                solutionId:14,
                                name:"Dead Finger",
                                description:"Dead Finger",
                                lineOfBusiness:"CCB",
                                phase:"Development",
                                prodDate:"18-05-2021",
                                solutionTechnologiesUsed:"ReportBuilder",
                                capabilities:'Data Ex',
                                certificationStatus:"Certified",
                                classificationRating:"Enhanced",
                                informationType:"Client Confidential Information",
                                retirementTargetDate:"14-01-2022"
                            },
                            {
                                solutionId:15,
                                name:"Nocturnal Finger",
                                description:"Nocturnal Finger",
                                lineOfBusiness:"CCB",
                                phase:"Development",
                                prodDate:"19-05-2021",
                                solutionTechnologiesUsed:"WinAutomation",
                                capabilities:'Data En',
                                certificationStatus:"Not Certified",
                                classificationRating:"Enhanced",
                                informationType:"Workforce Information",
                                retirementTargetDate:"15-01-2022"
                            },
                            {
                                solutionId:16,
                                name:"Eastern Moose",
                                description:"Eastern Moose",
                                lineOfBusiness:"AWM",
                                phase:"Development",
                                prodDate:"20-05-2021",
                                solutionTechnologiesUsed:"Tableau",
                                capabilities:'Data Tr',
                                certificationStatus:"Certified",
                                classificationRating:"Enhanced",
                                informationType:"Personal Information",
                                retirementTargetDate:"16-01-2022"
                            },
                            {
                                solutionId:17,
                                name:"Parachute Intense",
                                description:"Parachute Intense",
                                lineOfBusiness:"CT",
                                phase:"Development",
                                prodDate:"21-05-2021",
                                solutionTechnologiesUsed:"QlikView",
                                capabilities:'Data Vi',
                                certificationStatus:"Not Certified",
                                classificationRating:"Enhanced",
                                informationType:"Client Confidential Information",
                                retirementTargetDate:"17-01-2022"
                            },
                            {
                                solutionId:18,
                                name:"Pure Venus",
                                description:"Pure Venus",
                                lineOfBusiness:"CT",
                                phase:"Development",
                                prodDate:"22-05-2021",
                                solutionTechnologiesUsed:"AutomationAnywhere",
                                capabilities:'Data Re',
                                certificationStatus:"Certified",
                                classificationRating:"Baseline",
                                informationType:"Workforce Information",
                                retirementTargetDate:"18-01-2022"
                            },
                            {
                                solutionId:19,
                                name:"Northernmost Harsh Moon",
                                description:"Northernmost Harsh Moon",
                                lineOfBusiness:"CIB",
                                phase:"Production",
                                prodDate:"23-05-2021",
                                solutionTechnologiesUsed:"Alteryx",
                                capabilities:'Prcs Autmn',
                                certificationStatus:"Not Certified",
                                classificationRating:"Baseline",
                                informationType:"Personal Information",
                                retirementTargetDate:"19-01-2022"
                            },
                            {
                                solutionId:20,
                                name:"Raw Alpha",
                                description:"Raw Alpha",
                                lineOfBusiness:"CIB",
                                phase:"Production",
                                prodDate:"24-05-2021",
                                solutionTechnologiesUsed:"Cognos",
                                capabilities:'Other',
                                certificationStatus:"Certified",
                                classificationRating:"Baseline",
                                informationType:"Client Confidential Information",
                                retirementTargetDate:"20-01-2022"
                            },
                            {
                                solutionId:21,
                                name:"Indigo Star",
                                description:"Indigo Star",
                                lineOfBusiness:"CCB",
                                phase:"Production",
                                prodDate:"25-05-2021",
                                solutionTechnologiesUsed:"ReportBuilder",
                                capabilities:'Anlyts',
                                certificationStatus:"Not Certified",
                                classificationRating:"Baseline",
                                informationType:"Workforce Information",
                                retirementTargetDate:"21-01-2022"
                            },
                            {
                                solutionId:22,
                                name:"Lucky Obscure",
                                description:"Lucky Obscure",
                                lineOfBusiness:"CCB",
                                phase:"Production",
                                prodDate:"26-05-2021",
                                solutionTechnologiesUsed:"WinAutomation",
                                capabilities:'Adjstmts',
                                certificationStatus:"Certified",
                                classificationRating:"Baseline",
                                informationType:"Personal Information",
                                retirementTargetDate:"22-01-2022"
                            },
                            {
                                solutionId:23,
                                name:"Unique Tungsten",
                                description:"Unique Tungsten",
                                lineOfBusiness:"CIB",
                                phase:"Production",
                                prodDate:"27-05-2021",
                                solutionTechnologiesUsed:"Tableau",
                                capabilities:'Qlty Vld',
                                certificationStatus:"Not Certified",
                                classificationRating:"Baseline",
                                informationType:"Client Confidential Information",
                                retirementTargetDate:"23-01-2022"
                            },
                            {
                                solutionId:24,
                                name:"Empty Jupiter",
                                description:"Empty Jupiter",
                                lineOfBusiness:"CT",
                                phase:"Production",
                                prodDate:"28-05-2021",
                                solutionTechnologiesUsed:"QlikView",
                                capabilities:'Data Ex',
                                certificationStatus:"Certified",
                                classificationRating:"Baseline",
                                informationType:"Workforce Information",
                                retirementTargetDate:"24-01-2022"
                            },
                            {
                                solutionId:25,
                                name:"Pure Windshield",
                                description:"Pure Windshield",
                                lineOfBusiness:"AWM",
                                phase:"Production",
                                prodDate:"29-05-2021",
                                solutionTechnologiesUsed:"cognos",
                                capabilities:'Data En',
                                certificationStatus:"Not Certified",
                                classificationRating:"Baseline",
                                informationType:"Personal Information",
                                retirementTargetDate:"25-01-2022"
                            },
                            {
                                solutionId:26,
                                name:"Stormy Laser",
                                description:"Stormy Laser",
                                lineOfBusiness:"CIB",
                                phase:"Production",
                                prodDate:"30-05-2021",
                                solutionTechnologiesUsed:"Alteryx",
                                capabilities:'Data Tr',
                                certificationStatus:"Certified",
                                classificationRating:"Enhanced",
                                informationType:"Client Confidential Information",
                                retirementTargetDate:"26-01-2022"
                            },
                            {
                                solutionId:27,
                                name:"Rocky Microphone",
                                description:"Rocky Microphone",
                                lineOfBusiness:"CIB",
                                phase:"Production",
                                prodDate:"31-05-2021",
                                solutionTechnologiesUsed:"Cognos",
                                capabilities:'Data Vi',
                                certificationStatus:"Not Certified",
                                classificationRating:"Enhanced",
                                informationType:"Workforce Information",
                                retirementTargetDate:"27-01-2022"
                            },
                            {
                                solutionId:28,
                                name:"Autumn Restless",
                                description:"Autumn Restless",
                                lineOfBusiness:"CIB",
                                phase:"Retired",
                                prodDate:"01-06-2021",
                                solutionTechnologiesUsed:"ReportBuilder",
                                capabilities:'Data Re',
                                certificationStatus:"Certified",
                                classificationRating:"Enhanced",
                                informationType:"Personal Information",
                                retirementTargetDate:"28-01-2022"
                            },
                            {
                                solutionId:29,
                                name:"Sticky Windshield",
                                description:"Sticky Windshield",
                                lineOfBusiness:"CCB",
                                phase:"Retired",
                                prodDate:"02-06-2021",
                                solutionTechnologiesUsed:"WinAutomation",
                                capabilities:'Prcs Autmn',
                                certificationStatus:"Not Certified",
                                classificationRating:"Enhanced",
                                informationType:"Client Confidential Information",
                                retirementTargetDate:"29-01-2022"
                            },
                            {
                                solutionId:30,
                                name:"Trombone Furious",
                                description:"Trombone Furious",
                                lineOfBusiness:"CT",
                                phase:"Retired",
                                prodDate:"03-06-2021",
                                solutionTechnologiesUsed:"Tableau",
                                capabilities:'Other',
                                certificationStatus:"Certified",
                                classificationRating:"Baseline",
                                informationType:"Workforce Information",
                                retirementTargetDate:"30-01-2022"
                            },
                        ]
                    }
                )
            }
            ,1000
        )
    })
}
var mockData=require('./mockupData.json')
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        columnDefs: [
            { headerName: "ID", field: "solutionId" ,filter: 'agTextColumnFilter', width:70
            },
            { headerName: "Name", field: "name"},
            { headerName: "Description", field: "description", },
            { headerName: "Line Of Business", field: "lineOfBusiness", },
            { headerName: "Phase", field: "phase" },
            { headerName: "Production Date", field: "prodDate" },
            { headerName: "Solution Tech. Used", field: "solutionTechnologiesUsed" },
            { headerName: "Capabilities", field: "capabilities" },
            { headerName: "Certification Status", field: "certificationStatus" },
            { headerName: "Classification Rating", field: "classificationRating" },
            { headerName: "Info Type", field: "informationType" },
            { headerName: "Retirement Target Date", field: "retirementTargetDate" }],
          rowData: mockData.data
        ,
        ideationSolutionNumber:0,
        developmentSolutionNumber:0,
        productionSolutionNumber:0,
        retiredSolutionNumber:0,
        filter:{
            line:'',
            phase:'',
            solution:'',
            capability:''
        },
        data:['AAA']
      }
    }
    componentDidMount(){
        server().then(data => {
            let ideationSolutionNumber = 0;
            let developmentSolutionNumber = 0;
            let productionSolutionNumber = 0;
            let retiredSolutionNumber = 0;

            console.log(data)
            for (let i = 0; i < data.data.length; i++){
                if (data.data[i].phase === 'Ideation'){
                    ideationSolutionNumber = ideationSolutionNumber + 1;
                }
                else if (data.data[i].phase === 'Development'){
                    developmentSolutionNumber = developmentSolutionNumber + 1;
                }
                else if (data.data[i].phase === 'Production'){
                    productionSolutionNumber = productionSolutionNumber + 1;
                }
                else if (data.data[i].phase === 'Retired'){
                    retiredSolutionNumber = retiredSolutionNumber + 1;
                }
            }
            this.setState({ideationSolutionNumber,developmentSolutionNumber,productionSolutionNumber,retiredSolutionNumber});

            this.updateChartOne(data.data)
            this.updateChartTwo(data.data)
            this.updateChartThree(data.data)
            this.updateChartFive(data.data)
        })

        // The Pie Chart #1

        var width = 180
        var height = 180
        var margin = 0

        // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        var radius = Math.min(width, height) / 2 - margin

        // append the svg object to the div called 'my_dataviz'
        var svg = window.d3.select("#my_dataviz")
        .append("svg")
            .attr("width", width)
            .attr("height", height)
        .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        // Create dummy data
        var data = {a: 9, b: 20, c:30, d:8, e:12}

        // set the color scale
        var color = window.d3.scaleOrdinal()
        .domain(data)
        .range(window.d3.schemeSet2);

        // Compute the position of each group on the pie:
        var pie = window.d3.pie()
        .value(function(d) {return d.value; })
        var data_ready = pie(window.d3.entries(data))
        // Now I know that group A goes from 0 degrees to x degrees and so on.

        // shape helper to build arcs:
        var arcGenerator = window.d3.arc()
        .innerRadius(0)
        .outerRadius(radius)

        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        svg
        .selectAll('mySlices')
        .data(data_ready)
        .enter()
        .append('path')
            .attr('d', arcGenerator)
            .attr('fill', function(d){ return(color(d.data.key)) })
            .attr("stroke", "white")
            .style("stroke-width", "2px")
            .style("opacity", 0.7)

        // Now add the annotation. Use the centroid method to get the best coordinates
        svg
        .selectAll('mySlices')
        .data(data_ready)
        .enter()
        .append('text')
        .text(function(d){ return "" + d.data.key})
        .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
        .style("text-anchor", "middle")
        .style("font-size", 14)


        // Stacked Bar Chart

        var initStackedBarChart = {
            draw: function(config) {
                let domEle = config.element,
                stackKey = config.key,
                data = config.data,
                margin = {top: 0, right: 10, bottom: 30, left: 30},
                parseDate = window.d3.timeParse("%m/%Y"),
                width = 240 - margin.left - margin.right,
                height = 210 - margin.top - margin.bottom,
                xScale = window.d3.scaleLinear().rangeRound([0, width]),
                yScale = window.d3.scaleBand().rangeRound([height, 0]).padding(0.1),
                color = window.d3.scaleOrdinal(window.d3.schemeCategory20),
                xAxis = window.d3.axisBottom(xScale),
                yAxis =  window.d3.axisLeft(yScale).tickFormat(window.d3.timeFormat("%b")),
                svg = window.d3.select("#"+domEle).append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
                var stack = window.d3.stack()
                    .keys(stackKey)
                    /*.order(d3.stackOrder)*/
                    .offset(window.d3.stackOffsetNone);
            
                var layers= stack(data);
                    data.sort(function(a, b) { return b.total - a.total; });
                    yScale.domain(data.map(function(d) { return parseDate(d.date); }));
                    xScale.domain([0, 200 ]).nice();;
        
                var layer = svg.selectAll(".layer")
                    .data(layers)
                    .enter().append("g")
                    .attr("class", "layer")
                    .style("fill", function(d, i) { return color(i); });
        
                  layer.selectAll("rect")
                      .data(function(d) { return d; })
                    .enter().append("rect")
                      .attr("y", function(d) { return yScale(parseDate(d.data.date)); })
                      .attr("x", function(d) { return xScale(d[0]); })
                      .attr("height", yScale.bandwidth())
                      .attr("width", function(d) { return xScale(d[1]) - xScale(d[0]) });
        
                    svg.append("g")
                    .attr("class", "axis axis--x")
                    .attr("transform", "translate(0," + (height+5) + ")")
                    .call(xAxis);
        
                    svg.append("g")
                    .attr("class", "axis axis--y")
                    .attr("transform", "translate(0,0)")
                    .call(yAxis);							
            }
        }
        var stackedData = [
            {
                "date":"4/1854",
                "total":200,
                "disease":100,
                "wounds":50,
            },
            {
                "date":"5/1854",
                "total":200,
                "disease":100,
                "wounds":50,
            },
            {
                "date":"6/1854",
                "total":200,
                "disease":100,
                "wounds":50,
            },
            {
                "date":"7/1854",
                "total":200,
                "disease":100,
                "wounds":50,
            },
            {
                "date":"8/1854",
                "total":200,
                "disease":100,
                "wounds":50,
            },
            {
                "date":"9/1854",
                "total":200,
                "disease":100,
                "wounds":50,
            },
            {
                "date":"10/1854",
                "total":200,
                "disease":100,
                "wounds":50,
            },
            {
                "date":"11/1854",
                "total":200,
                "disease":100,
                "wounds":50,
            },
            {
                "date":"12/1854",
                "total":200,
                "disease":100,
                "wounds":50,
            },
            {
                "date":"1/1855",
                "total":200,
                "disease":100,
                "wounds":50,
            },
            {
                "date":"2/1855",
                "total":200,
                "disease":100,
                "wounds":50,
            }
        ]
        
        var key = ["wounds", "disease"];

        initStackedBarChart.draw({
            data: stackedData,
            key: key,
            element: 'stacked-bar'
        });

        // Bar Chart Init 3rd

        function barChart(selector){
            let svg = window.d3.select(selector),
            margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            
            g.append("g")
                .attr("class", "x axis");
            
            g.append("g")
                .attr("class", "y axis");    
            
            let myData = [
            {name:"John", age:23, height:1.93},
            {name:"Mafe", age:22, height:1.70},
            {name:"Sonia", age:27, height:1.60},
            {name:"Vicente", age:73, height:0.32}
            ];
            
            let x = window.d3.scaleBand()
                .padding(0.2)
                .range([0, width]);
            
            let y = window.d3.scaleLinear()
                .range([height, 0]);    
            
            function update(myData) {
            x.domain(myData.map(d => d.name));
            y.domain([0, window.d3.max(myData, d => d.height)]);      
            
            let points = g.selectAll(".point")
                .data(myData); //update
            
            let pointsEnter = points
                .enter()
                .append("rect")
                .attr("class", "point");
            
            points.merge(pointsEnter) //Enter + Update
                .attr("x", d => x(d.name))
                .attr("y", d => y(d.height))
                .attr("width", d => x.bandwidth())
                .attr("height", d => height - y(d.height))
            
                .style("fill", "steelblue");
            
            points.exit()
                .remove();
            
            
            g.select(".x.axis")
                .call(window.d3.axisBottom(x))
                .attr("transform",
                    "translate(0, " + height + ")");
            
            g.select(".y.axis")
                .call(window.d3.axisLeft(y));      
            }
            
            
            update(myData);
            
        }

        barChart("#viz")

        // Trend bar Chart

        barChart("#ziz")

        function sunburst(){
            // Dimensions of sunburst.
            var width = 300;
            var height = 300;
            var radius = Math.min(width, height) / 2;

            // Breadcrumb dimensions: width, height, spacing, width of tip/tail.
            var b = {
                w: 75, h: 30, s: 3, t: 10
            };

            // Mapping of step names to colors.
            var colors = {
                "home": "#5687d1",
                "product": "#7b615c",
                "search": "#de783b",
                "account": "#6ab975",
                "other": "#a173d1",
                "end": "#bbbbbb"
            };

            // Total size of all segments; we set this later, after loading the data.
            var totalSize = 0; 

            var vis = window.d3.select("#chart").append("svg:svg")
                .attr("width", width)
                .attr("height", height)
                .append("svg:g")
                .attr("id", "container")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            var partition = window.d3.partition()
                .size([2 * Math.PI, radius * radius]);

            var arc = window.d3.arc()
                .startAngle(function(d) { return d.x0; })
                .endAngle(function(d) { return d.x1; })
                .innerRadius(function(d) { return Math.sqrt(d.y0); })
                .outerRadius(function(d) { return Math.sqrt(d.y1); });

            // Use window.d3.text and window.d3.csvParseRows so that we do not need to have a header
            // row, and can receive the csv as an array of arrays.
            
            var csv = [["account-account-account-account-account-account",2],["account-account-account-account-account-end",10]];
            var json = buildHierarchy(csv);
            createVisualization(json);

            // Main function to draw and set up the visualization, once we have the data.
            function createVisualization(json) {

            // Basic setup of page elements.
            initializeBreadcrumbTrail();
            // drawLegend();
            // window.d3.select("#togglelegend").on("click", toggleLegend);

            // Bounding circle underneath the sunburst, to make it easier to detect
            // when the mouse leaves the parent g.
            vis.append("svg:circle")
                .attr("r", radius)
                .style("opacity", 0);

            // Turn the data into a window.d3 hierarchy and calculate the sums.
            var root = window.d3.hierarchy(json)
                .sum(function(d) { return d.size; })
                .sort(function(a, b) { return b.value - a.value; });
            
            // For efficiency, filter nodes to keep only those large enough to see.
            var nodes = partition(root).descendants()
                .filter(function(d) {
                    return (d.x1 - d.x0 > 0.005); // 0.005 radians = 0.29 degrees
                });

            var path = vis.data([json]).selectAll("#chart path")
                .data(nodes)
                .enter().append("svg:path")
                .attr("display", function(d) { return d.depth ? null : "none"; })
                .attr("d", arc)
                .attr("fill-rule", "evenodd")
                .style("fill", function(d) { return colors[d.data.name]; })
                .style("opacity", 1)
                .on("mouseover", mouseover);

            // Add the mouseleave handler to the bounding circle.
            window.d3.select("#container").on("mouseleave", mouseleave);

            // Get total size of the tree = value of root node from partition.
            totalSize = path.datum().value;
            };

            // Fade all but the current sequence, and show it in the breadcrumb trail.
            function mouseover(d) {

                var percentage = (100 * d.value / totalSize).toPrecision(3);
                var percentageString = percentage + "%";
                if (percentage < 0.1) {
                    percentageString = "< 0.1%";
                }

                window.d3.select("#chart #percentage")
                    .text(percentageString);

                window.d3.select("#chart #explanation")
                    .style("visibility", "");

                var sequenceArray = d.ancestors().reverse();
                sequenceArray.shift(); // remove root node from the array
                updateBreadcrumbs(sequenceArray, percentageString);

                // Fade all the segments.
                window.d3.selectAll("#chart path")
                    .style("opacity", 0.3);

                // Then highlight only those that are an ancestor of the current segment.
                vis.selectAll("path")
                .filter(function(node) {
                            return (sequenceArray.indexOf(node) >= 0);
                        })
                .style("opacity", 1);
            }

            // Restore everything to full opacity when moving off the visualization.
            function mouseleave(d) {

            // Hide the breadcrumb trail
            window.d3.select("#trail")
                .style("visibility", "hidden");

            // Deactivate all segments during transition.
            window.d3.selectAll("#chart path").on("mouseover", null);

            // Transition each segment to full opacity and then reactivate it.
            window.d3.selectAll("#chart path")
                .transition()
                .duration(1000)
                .style("opacity", 1)
                .on("end", function() {
                            window.d3.select(this).on("mouseover", mouseover);
                        });

            window.d3.select("#explanation")
                .style("visibility", "hidden");
            }

            function initializeBreadcrumbTrail() {
            // Add the svg area.
            var trail = window.d3.select("#aad").append("svg:svg")
                .attr("width", width)
                .attr("height", 50)
                .attr("id", "trail");
            // Add the label at the end, for the percentage.
            trail.append("svg:text")
                .attr("id", "endlabel")
                .style("fill", "#000");
            }

            // Generate a string that describes the points of a breadcrumb polygon.
            function breadcrumbPoints(d, i) {
            var points = [];
            points.push("0,0");
            points.push(b.w + ",0");
            points.push(b.w + b.t + "," + (b.h / 2));
            points.push(b.w + "," + b.h);
            points.push("0," + b.h);
            if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
                points.push(b.t + "," + (b.h / 2));
            }
            return points.join(" ");
            }

            // Update the breadcrumb trail to show the current sequence and percentage.
            function updateBreadcrumbs(nodeArray, percentageString) {

            // Data join; key function combines name and depth (= position in sequence).
            var trail = window.d3.select("#trail")
                .selectAll("g")
                .data(nodeArray, function(d) { return d.data.name + d.depth; });

            // Remove exiting nodes.
            trail.exit().remove();

            // Add breadcrumb and label for entering nodes.
            var entering = trail.enter().append("svg:g");

            entering.append("svg:polygon")
                .attr("points", breadcrumbPoints)
                .style("fill", function(d) { return colors[d.data.name]; });

            entering.append("svg:text")
                .attr("x", (b.w + b.t) / 2)
                .attr("y", b.h / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", "middle")
                .text(function(d) { return d.data.name; });

            // Merge enter and update selections; set position for all nodes.
            entering.merge(trail).attr("transform", function(d, i) {
                return "translate(" + i * (b.w + b.s) + ", 0)";
            });

            // Now move and update the percentage at the end.
            window.d3.select("#trail").select("#endlabel")
                .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
                .attr("y", b.h / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", "middle")
                .text(percentageString);

            // Make the breadcrumb trail visible, if it's hidden.
            window.d3.select("#trail")
                .style("visibility", "");

            }

            // function drawLegend() {

            // // Dimensions of legend item: width, height, spacing, radius of rounded rect.
            // var li = {
            //     w: 75, h: 30, s: 3, r: 3
            // };

            // var legend = window.d3.select("#legend").append("svg:svg")
            //     .attr("width", li.w)
            //     .attr("height", window.d3.keys(colors).length * (li.h + li.s));

            // var g = legend.selectAll("g")
            //     .data(window.d3.entries(colors))
            //     .enter().append("svg:g")
            //     .attr("transform", function(d, i) {
            //             return "translate(0," + i * (li.h + li.s) + ")";
            //         });

            // g.append("svg:rect")
            //     .attr("rx", li.r)
            //     .attr("ry", li.r)
            //     .attr("width", li.w)
            //     .attr("height", li.h)
            //     .style("fill", function(d) { return d.value; });

            // g.append("svg:text")
            //     .attr("x", li.w / 2)
            //     .attr("y", li.h / 2)
            //     .attr("dy", "0.35em")
            //     .attr("text-anchor", "middle")
            //     .text(function(d) { return d.key; });
            // }

            

            // Take a 2-column CSV and transform it into a hierarchical structure suitable
            // for a partition layout. The first column is a sequence of step names, from
            // root to leaf, separated by hyphens. The second column is a count of how 
            // often that sequence occurred.
            function buildHierarchy(csv) {
            var root = {"name": "root", "children": []};
            for (var i = 0; i < csv.length; i++) {
                var sequence = csv[i][0];
                var size = +csv[i][1];
                if (isNaN(size)) { // e.g. if this is a header row
                continue;
                }
                var parts = sequence.split("-");
                var currentNode = root;
                for (var j = 0; j < parts.length; j++) {
                var children = currentNode["children"];
                var nodeName = parts[j];
                var childNode;
                if (j + 1 < parts.length) {
            // Not yet at the end of the sequence; move down the tree.
                var foundChild = false;
                for (var k = 0; k < children.length; k++) {
                if (children[k]["name"] === nodeName) {
                    childNode = children[k];
                    foundChild = true;
                    break;
                }
                }
            // If we don't already have a child node for this branch, create it.
                if (!foundChild) {
                childNode = {"name": nodeName, "children": []};
                children.push(childNode);
                }
                currentNode = childNode;
                } else {
                // Reached the end of the sequence; create a leaf node.
                childNode = {"name": nodeName, "size": size};
                children.push(childNode);
                }
                }
            }
            return root;
            };
        }

        sunburst();

    }
    updateChartOne = (data) => {
        let ideation = 0;
        let development = 0;
        let production = 0;
        let retired = 0;

        for (let i = 0 ; i < data.length ; i++){
            if (data[i].phase === 'Ideation'){
                ideation = ideation + 1;
            }
            else if (data[i].phase === 'Development'){
                development = development + 1;
            }
            else if (data[i].phase === 'Production'){
                production = production + 1;
            }
            else if (data[i].phase === 'Retired'){
                retired = retired + 1;
            }
        }

        var width = 180
        var height = 180
        var margin = 0

        // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        var radius = Math.min(width, height) / 2 - margin

        // append the svg object to the div called 'my_dataviz'
        document.querySelector("#my_dataviz").innerHTML = '';
        var svg = window.d3.select("#my_dataviz")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        // Create dummy data
        var chartData = {Ideation:ideation,  Development:development, Production:production, Retired:retired}

        // set the color scale
        var color = window.d3.scaleOrdinal()
            .domain(chartData)
            .range(window.d3.schemeSet2);

        // Compute the position of each group on the pie:
        var pie = window.d3.pie()
            .value(function(d) {return d.value; })

        var data_ready = pie(window.d3.entries(chartData))
        // Now I know that group A goes from 0 degrees to x degrees and so on.

        // shape helper to build arcs:
        var arcGenerator = window.d3.arc()
            .innerRadius(0)
            .outerRadius(radius)

        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        svg
            .selectAll('mySlices')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', arcGenerator)
            .attr('fill', function(d){ return(color(d.data.key)) })
            .attr("stroke", "white")
            .style("stroke-width", "2px")
            .style("opacity", 0.7)

        // Now add the annotation. Use the centroid method to get the best coordinates
        svg
            .selectAll('mySlices')
            .data(data_ready)
            .enter()
            .append('text')
            .text(function(d){ return "" + d.data.key})
            .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
            .style("text-anchor", "middle")
            .style("font-size", 13)
    }

    updateChartTwo = (arg) => {


        const dataUpdated = (data) => {
            
            let capabilities = [];
            
            for (let i = 0; i < data.length;i++){
                if (capabilities.find(e => e.label === data[i].capabilities)){

                    const item = capabilities.find(e => e.label === data[i].capabilities);
                    
                    if (data[i].phase === 'Ideation'){
                        console.log("Ideation")
                        item.ideation = item.ideation + 1;
                        item.total = item.total + 1;
                    }
                    else if (data[i].phase === 'Development'){
                        console.log("Development")
                        item.development = item.development + 1;
                        item.total = item.total + 1;
                    }
                    else if (data[i].phase === 'Production'){
                        console.log("Production")
                        item.production = item.production + 1;
                        item.total = item.total + 1;
                    }
                    else if (data[i].phase === 'Retired'){
                        console.log("Retired")
                        item.retired = item.retired + 1;
                        item.total = item.total + 1;
                    }

                    const filteredCapabilites = capabilities.filter(e => e !== data[i].capabilities);

                    capabilities = filteredCapabilites.concat(item);

                }
                else{
                    if (data[i].phase === 'Ideation'){
                        capabilities.push({label:data[i].capabilities,total:1,ideation:1,development:0,production:0,retired:0})
                    }
                    else if (data[i].phase === 'Development'){
                        capabilities.push({label:data[i].capabilities,total:1,development:1,ideation:1,production:0,retired:0})
                    }
                    else if (data[i].phase === 'Production'){
                        capabilities.push({label:data[i].capabilities,total:1,ideation:1,development:0,production:1,retired:0})
                    }
                    else if (data[i].phase === 'Retired'){
                        capabilities.push({label:data[i].capabilities,total:1,ideation:1,development:0,production:0,retired:1})
                    }
                }
            }



            // for (let i = 0 ; i < capabilities.length ; i++){
            //     const ideation = [...data].filter(e => e ===  )
            // }
            // console.log(capabilities)
            return capabilities

        }

        const stackedData = dataUpdated(arg);

        const maxDomain = stackedData.sort((a,b) => {
            if (a.total > b.total){
                return -1
            }
            else if (a.total === b.total){
                return 0
            }
            else if (a.total < b.total){
                return 1
            }
        })[0].total



        document.querySelector("#stacked-bar").innerHTML = '';
        var initStackedBarChart = {
            draw: function(config) {
                let domEle = config.element,
                stackKey = config.key,
                data = config.data,
                margin = {top: 0, right: 10, bottom: 30, left: 70},
                width = 300 - margin.left - margin.right,
                height = 220 - margin.top - margin.bottom,
                xScale = window.d3.scaleLinear().rangeRound([0, width]),
                yScale = window.d3.scaleBand().rangeRound([height, 0]).padding(0.1),
                color = window.d3.scaleOrdinal(window.d3.schemeCategory20),
                xAxis = window.d3.axisBottom(xScale),
                yAxis =  window.d3.axisLeft(yScale),
                svg = window.d3.select("#"+domEle).append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
                var stack = window.d3.stack()
                    .keys(stackKey)
                    /*.order(d3.stackOrder)*/
                    .offset(window.d3.stackOffsetNone);
            
                var layers= stack(data);
                    data.sort(function(a, b) { return b.total - a.total; });
                    yScale.domain(data.map(function(d) { return d.label; }));
                    xScale.domain([0, maxDomain ]).nice();;
        
                var layer = svg.selectAll(".layer")
                    .data(layers)
                    .enter().append("g")
                    .attr("class", "layer")
                    .style("fill", function(d, i) { return color(i); });
        
                layer.selectAll("rect")
                    .data(function(d) { return d; })
                    .enter().append("rect")
                    .attr("y", function(d) { return yScale((d.data.label)); })
                    .attr("x", function(d) { return xScale(d[0]); })
                    .attr("height", yScale.bandwidth())
                    .attr("width", function(d) { return xScale(d[1]) - xScale(d[0]) });
        
                svg.append("g")
                    .attr("class", "axis axis--x")
                    .attr("transform", "translate(0," + (height+5) + ")")
                    .call(xAxis)
                    .style("font-size","8px")
    
                svg.append("g")
                    .attr("class", "axis axis--y")
                    .attr("transform", "translate(0,0)")
                    .call(yAxis);							
            }
        }

        var stackededData = [
            {
                "label":"A",
                "total":200,
                "capabilities":100,
                "phases":50
            },
            {
                "label":"M",
                "total":100,
                "capabilities":50,
                "phases":50
            },
            {
                "label":"L",
                "total":200,
                "capabilities":100,
                "phases":50,
            },
            {
                "label":"O",
                "total":200,
                "capabilities":100,
                "phases":50,
            },
            {
                "label":"P",
                "total":200,
                "capabilities":100,
                "phases":50,
            },
            {
                "label":"Q",
                "total":200,
                "capabilities":100,
                "phases":50,
            },
            {
                "label":"R",
                "total":200,
                "capabilities":100,
                "phases":50,
            }
        ]
        
        

        var key = ["ideation", "development","production","retired"];

        initStackedBarChart.draw({
            data: stackedData,
            key: key,
            element: 'stacked-bar'
        });
    }

    updateChartThree = (newData) => {

        document.querySelector("#viz").innerHTML = '';

        function barChart(selector){
            let svg = window.d3.select(selector),
            margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            
            g.append("g")
                .attr("class", "x axis");
            
            g.append("g")
                .attr("class", "y axis");    
            
            // let myData = [
            //     {name:"John",  height:1.93},
            //     {name:"Mafe",  height:1.70},
            //     {name:"Sonia", height:1.60},
            //     {name:"Vicente",  height:0.32}
            // ];



            const renderNewData = (d) => {
                let final = [];
                for (let i = 0; i < d.length ; i++){
                    
                    let foundItem = final.find(e => e.label === d[i].solutionTechnologiesUsed)

                    if (foundItem){
                        const filteredArry = final.filter(e => e.label !== d[i].solutionTechnologiesUsed)
                        foundItem.total = foundItem.total + 1;
                        final = filteredArry.concat(foundItem)
                    }
                    else{
                        final.push({label:d[i].solutionTechnologiesUsed,total:1})
                    }

                }
                return final
            }
            
            let myData = renderNewData(newData)
            console.log(myData)

            let x = window.d3.scaleBand()
                .padding(0.2)
                .range([0, width]);
            
            let y = window.d3.scaleLinear()
                .range([height, 0]);    
            
            function update(myData) {
            x.domain(myData.map(d => d.label));
            y.domain([0, window.d3.max(myData, d => d.total)]);      
            
            let points = g.selectAll(".point")
                .data(myData); //update
            
            let pointsEnter = points
                .enter()
                .append("rect")
                .attr("class", "point");
            
            points.merge(pointsEnter) //Enter + Update
                .attr("x", d => x(d.label))
                .attr("y", d => y(d.total))
                .attr("width", d => x.bandwidth())
                .attr("height", d => height - y(d.total))
            
                .style("fill", "steelblue");
            
            points.exit()
                .remove();
            
            
            g.select(".x.axis")
                .call(window.d3.axisBottom(x))
                .attr("transform",
                    "translate(0, " + height + ")")
                .style("font-size","10px")
            
            g.select(".y.axis")
                .call(window.d3.axisLeft(y));      
            }
            
            
            update(myData);
            
        }

        barChart("#viz")
    }
    updateChartFour = (newData) => {

        document.querySelector("#ziz").innerHTML = '';

        function barChart(selector){
            let svg = window.d3.select(selector),
            margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            
            g.append("g")
                .attr("class", "x axis");
            
            g.append("g")
                .attr("class", "y axis");    
            
            // let myData = [
            //     {name:"John",  height:1.93},
            //     {name:"Mafe",  height:1.70},
            //     {name:"Sonia", height:1.60},
            //     {name:"Vicente",  height:0.32}
            // ];



            const renderNewData = (d) => {
                let final = [];
                let filteredD = [];

                const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

                filteredD = d.filter(e => e.phase === "Production");
                
                // Month is the label and amount of tech is the bar 



                filteredD = filteredD.sort((a,b) => {
                    const aDate = (new Date(a.prodDate)).getDate();
                    const bDate = (new Date(b.prodDate)).getDate();

                    if (aDate < bDate){
                        return -1
                    }
                    else{
                        return 1
                    }
                })

                

                for (let i = 0; i < filteredD.length ; i++){
                    
                    const foundItem = final.find(e => e.label === filteredD[i].lineOfBusiness);
                    
                    if (foundItem){

                    }   

                }

                return final
            }
            
            let myData = renderNewData(newData)
            console.log(myData)

            let x = window.d3.scaleBand()
                .padding(0.2)
                .range([0, width]);
            
            let y = window.d3.scaleLinear()
                .range([height, 0]);    
            
            function update(myData) {
            x.domain(myData.map(d => d.label));
            y.domain([0, window.d3.max(myData, d => d.total)]);      
            
            let points = g.selectAll(".point")
                .data(myData); //update
            
            let pointsEnter = points
                .enter()
                .append("rect")
                .attr("class", "point");
            
            points.merge(pointsEnter) //Enter + Update
                .attr("x", d => x(d.label))
                .attr("y", d => y(d.total))
                .attr("width", d => x.bandwidth())
                .attr("height", d => height - y(d.total))
            
                .style("fill", "steelblue");
            
            points.exit()
                .remove();
            
            
            g.select(".x.axis")
                .call(window.d3.axisBottom(x))
                .attr("transform",
                    "translate(0, " + height + ")");
            
            g.select(".y.axis")
                .call(window.d3.axisLeft(y));      
            }
            
            
            update(myData);
            
        }

        barChart("#ziz")
    }
    updateChartFive = (dat) => {

        let ddata = [["account-account-account-account-account-account",5],["account-account-account-account-account-end",10]];

        document.querySelector("#chart").innerHTML = "<div id='explanation' style={{visibility:'hidden',display:'block'}}><span id='percentage'></span><br/>-</div>"

        function sunburst(){
            // Dimensions of sunburst.
            var width = 300;
            var height = 300;
            var radius = Math.min(width, height) / 2;

            // Breadcrumb dimensions: width, height, spacing, width of tip/tail.
            var b = {
                w: 75, h: 30, s: 3, t: 10
            };

            // Mapping of step names to colors.
            var colors = {
                "home": "#5687d1",
                "product": "#7b615c",
                "search": "#de783b",
                "account": "#6ab975",
                "other": "#a173d1",
                "end": "#bbbbbb"
            };

            // Total size of all segments; we set this later, after loading the data.
            var totalSize = 0; 

            var vis = window.d3.select("#chart").append("svg:svg")
                .attr("width", width)
                .attr("height", height)
                .append("svg:g")
                .attr("id", "container")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            var partition = window.d3.partition()
                .size([2 * Math.PI, radius * radius]);

            var arc = window.d3.arc()
                .startAngle(function(d) { return d.x0; })
                .endAngle(function(d) { return d.x1; })
                .innerRadius(function(d) { return Math.sqrt(d.y0); })
                .outerRadius(function(d) { return Math.sqrt(d.y1); });

            // Use window.d3.text and window.d3.csvParseRows so that we do not need to have a header
            // row, and can receive the csv as an array of arrays.
            
            var csv = ddata;
            var json = buildHierarchy(csv);
            createVisualization(json);

            // Main function to draw and set up the visualization, once we have the data.
            function createVisualization(json) {

            // Basic setup of page elements.
            initializeBreadcrumbTrail();
            // drawLegend();
            // window.d3.select("#togglelegend").on("click", toggleLegend);

            // Bounding circle underneath the sunburst, to make it easier to detect
            // when the mouse leaves the parent g.
            vis.append("svg:circle")
                .attr("r", radius)
                .style("opacity", 0);

            // Turn the data into a window.d3 hierarchy and calculate the sums.
            var root = window.d3.hierarchy(json)
                .sum(function(d) { return d.size; })
                .sort(function(a, b) { return b.value - a.value; });
            
            // For efficiency, filter nodes to keep only those large enough to see.
            var nodes = partition(root).descendants()
                .filter(function(d) {
                    return (d.x1 - d.x0 > 0.005); // 0.005 radians = 0.29 degrees
                });

            var path = vis.data([json]).selectAll("#chart path")
                .data(nodes)
                .enter().append("svg:path")
                .attr("display", function(d) { return d.depth ? null : "none"; })
                .attr("d", arc)
                .attr("fill-rule", "evenodd")
                .style("fill", function(d) { return colors[d.data.name]; })
                .style("opacity", 1)
                .on("mouseover", mouseover);

            // Add the mouseleave handler to the bounding circle.
            window.d3.select("#container").on("mouseleave", mouseleave);

            // Get total size of the tree = value of root node from partition.
            totalSize = path.datum().value;
            };

            // Fade all but the current sequence, and show it in the breadcrumb trail.
            function mouseover(d) {

                var percentage = (100 * d.value / totalSize).toPrecision(3);
                var percentageString = percentage + "%";
                if (percentage < 0.1) {
                    percentageString = "< 0.1%";
                }

                window.d3.select("#chart #percentage")
                    .text(percentageString);

                window.d3.select("#chart #explanation")
                    .style("visibility", "");

                var sequenceArray = d.ancestors().reverse();
                sequenceArray.shift(); // remove root node from the array
                updateBreadcrumbs(sequenceArray, percentageString);

                // Fade all the segments.
                window.d3.selectAll("#chart path")
                    .style("opacity", 0.3);

                // Then highlight only those that are an ancestor of the current segment.
                vis.selectAll("path")
                .filter(function(node) {
                            return (sequenceArray.indexOf(node) >= 0);
                        })
                .style("opacity", 1);
            }

            // Restore everything to full opacity when moving off the visualization.
            function mouseleave(d) {

            // Hide the breadcrumb trail
            window.d3.select("#trail")
                .style("visibility", "hidden");

            // Deactivate all segments during transition.
            window.d3.selectAll("#chart path").on("mouseover", null);

            // Transition each segment to full opacity and then reactivate it.
            window.d3.selectAll("#chart path")
                .transition()
                .duration(1000)
                .style("opacity", 1)
                .on("end", function() {
                            window.d3.select(this).on("mouseover", mouseover);
                        });

            window.d3.select("#explanation")
                .style("visibility", "hidden");
            }

            function initializeBreadcrumbTrail() {
            // Add the svg area.
            var trail = window.d3.select("#aad").append("svg:svg")
                .attr("width", width)
                .attr("height", 50)
                .attr("id", "trail");
            // Add the label at the end, for the percentage.
            trail.append("svg:text")
                .attr("id", "endlabel")
                .style("fill", "#000");
            }

            // Generate a string that describes the points of a breadcrumb polygon.
            function breadcrumbPoints(d, i) {
            var points = [];
            points.push("0,0");
            points.push(b.w + ",0");
            points.push(b.w + b.t + "," + (b.h / 2));
            points.push(b.w + "," + b.h);
            points.push("0," + b.h);
            if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
                points.push(b.t + "," + (b.h / 2));
            }
            return points.join(" ");
            }

            // Update the breadcrumb trail to show the current sequence and percentage.
            function updateBreadcrumbs(nodeArray, percentageString) {

            // Data join; key function combines name and depth (= position in sequence).
            var trail = window.d3.select("#trail")
                .selectAll("g")
                .data(nodeArray, function(d) { return d.data.name + d.depth; });

            // Remove exiting nodes.
            trail.exit().remove();

            // Add breadcrumb and label for entering nodes.
            var entering = trail.enter().append("svg:g");

            entering.append("svg:polygon")
                .attr("points", breadcrumbPoints)
                .style("fill", function(d) { return colors[d.data.name]; });

            entering.append("svg:text")
                .attr("x", (b.w + b.t) / 2)
                .attr("y", b.h / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", "middle")
                .text(function(d) { return d.data.name; });

            // Merge enter and update selections; set position for all nodes.
            entering.merge(trail).attr("transform", function(d, i) {
                return "translate(" + i * (b.w + b.s) + ", 0)";
            });

            // Now move and update the percentage at the end.
            window.d3.select("#trail").select("#endlabel")
                .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
                .attr("y", b.h / 2)
                .attr("dy", "0.35em")
                .attr("text-anchor", "middle")
                .text(percentageString);

            // Make the breadcrumb trail visible, if it's hidden.
            window.d3.select("#trail")
                .style("visibility", "");

            }

            // function drawLegend() {

            // // Dimensions of legend item: width, height, spacing, radius of rounded rect.
            // var li = {
            //     w: 75, h: 30, s: 3, r: 3
            // };

            // var legend = window.d3.select("#legend").append("svg:svg")
            //     .attr("width", li.w)
            //     .attr("height", window.d3.keys(colors).length * (li.h + li.s));

            // var g = legend.selectAll("g")
            //     .data(window.d3.entries(colors))
            //     .enter().append("svg:g")
            //     .attr("transform", function(d, i) {
            //             return "translate(0," + i * (li.h + li.s) + ")";
            //         });

            // g.append("svg:rect")
            //     .attr("rx", li.r)
            //     .attr("ry", li.r)
            //     .attr("width", li.w)
            //     .attr("height", li.h)
            //     .style("fill", function(d) { return d.value; });

            // g.append("svg:text")
            //     .attr("x", li.w / 2)
            //     .attr("y", li.h / 2)
            //     .attr("dy", "0.35em")
            //     .attr("text-anchor", "middle")
            //     .text(function(d) { return d.key; });
            // }

            

            // Take a 2-column CSV and transform it into a hierarchical structure suitable
            // for a partition layout. The first column is a sequence of step names, from
            // root to leaf, separated by hyphens. The second column is a count of how 
            // often that sequence occurred.
            function buildHierarchy(csv) {
            var root = {"name": "root", "children": []};
            for (var i = 0; i < csv.length; i++) {
                var sequence = csv[i][0];
                var size = +csv[i][1];
                if (isNaN(size)) { // e.g. if this is a header row
                continue;
                }
                var parts = sequence.split("-");
                var currentNode = root;
                for (var j = 0; j < parts.length; j++) {
                var children = currentNode["children"];
                var nodeName = parts[j];
                var childNode;
                if (j + 1 < parts.length) {
            // Not yet at the end of the sequence; move down the tree.
                var foundChild = false;
                for (var k = 0; k < children.length; k++) {
                if (children[k]["name"] === nodeName) {
                    childNode = children[k];
                    foundChild = true;
                    break;
                }
                }
            // If we don't already have a child node for this branch, create it.
                if (!foundChild) {
                childNode = {"name": nodeName, "children": []};
                children.push(childNode);
                }
                currentNode = childNode;
                } else {
                // Reached the end of the sequence; create a leaf node.
                childNode = {"name": nodeName, "size": size};
                children.push(childNode);
                }
                }
            }
            return root;
            };
        }

        sunburst();

    }
    render() {
      return (
          <React.Fragment>
        <div className="container wrapper">
          <div className="filter-bar">
            <div className="filter filter-title-wrapper">
                <div className="inner-title">
                    Filters
                </div>
            </div>
            <div className="filter">
                <div className="inner-title">
                    Line of Business
                </div>
                <div className="line"></div>
                <div className="inner-title">
                    Phase
                </div>
            </div>
            <div className="filter">
                <div className="inner-title">
                    Phase
                </div>
                <div className="line"></div>
                <div className="inner-title">
                    Phase
                </div>
            </div>
            <div className="filter">
                <div className="inner-title">
                    Solution Tech Used
                </div>
                <div className="line"></div>
                <div className="inner-title">
                    Phase
                </div>
            </div>
            <div className="filter">
                <div className="inner-title">
                    Capabilities
                </div>
                <div className="line"></div>
                <div className="inner-title">
                    Phase
                </div>
            </div>
          </div>
          <div className="main-wrapper">
              <div className="item">
                <div className="inner-sm-card">
                    Solutions in Development
                </div>
                <div className="inner-sm-card-no">
                    {
                        this.state.developmentSolutionNumber
                    }
                </div>
              </div>
              <div className="item">
                <div className="inner-sm-card">
                    Solutions in Production
                </div>
                <div className="inner-sm-card-no">
                    {
                        this.state.productionSolutionNumber
                    }
                </div>
              </div>
              <div className="item">
                <div className="inner-sm-card">
                    Solutions Retired
                </div>
                <div className="inner-sm-card-no">
                    {
                        this.state.retiredSolutionNumber
                    }
                </div>
              </div>
              <div className="item">
                <div className="inner-sm-card">
                    Solutions in Ideation
                </div>
                <div className="inner-sm-card-no">
                    {
                        this.state.ideationSolutionNumber
                    }
                </div>
              </div>
              <div className="side-item">
                <div id="sequence"></div>
                <div id="chart">
                    <div id="explanation" style={{visibility:'hidden',display:"block"}}>
                    <span id="percentage"></span><br/>
                        -
                    </div>
                </div>
              </div>
              <div className="x2item">
                <div id="my_dataviz"></div>
              </div>
              <div className="x2item">
                <div id='stacked-bar'></div>
              </div>
              <div className="x2item">
                <svg width="240" 
                    height="200"
                    id="viz">
                </svg>
              </div>
              <div className="x2item">
                  
                <svg width="240" 
                    height="200"
                    id="ziz">
                </svg>
              </div>
              <div className="bottom-left">

              
              <div className="ag-theme-alpine" style={ {height: '160%', width: '100%'} }>
        <AgGridReact
        pagination={true}
        paginationPageSize='5'
        animateRows={true}
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            defaultColDef={{
                resizable: true,
                sortable: true,
                filter: true,
                
            }}
            >

        </AgGridReact>
      </div>
      </div>
              </div>
              <div className="bottom-right">

              <div className="App">
        
      </div>
              </div>
          </div>
          </React.Fragment>
      );
    }
  }


export default App;