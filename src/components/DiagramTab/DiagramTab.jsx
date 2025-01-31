import { Table } from "components/Table";
import { DiagramTabWrapper, DiagramButton, DiagramTableBar, DiagramButtonWrapper} from "./DiagramTab.styled";
import { IconSVG } from "stylesheet/IconSVG";

import { useState } from "react";
export const DiagramTab = () => {

    const response = [
        {categoryColor: "#FED057", categoryName: "Basic expenses", categorySum: "8700.00"},
        {categoryColor: "#FFD8D0", categoryName: "Products", categorySum: "3800.74"},
        {categoryColor: "#FD9498", categoryName: "Car", categorySum: "1500.00"},
        {categoryColor: "#C5BAFF", categoryName: "Self care", categorySum: "800.00"},
        {categoryColor: "#6E78E8", categoryName: "Child care", categorySum: "2208.50"},
        {categoryColor: "#4A56E2", categoryName: "Household products", categorySum: "300.00"},
        {categoryColor: "#81E1FF", categoryName: "Education", categorySum: "3400.00"},
        {categoryColor: "#24CCA7", categoryName: "Leisure", categorySum: "1230.00"},
        {categoryColor: "#00AD84", categoryName: "Other expenses", categorySum: "610.00"},
    ]

    const [tableData] = useState(response);



    return (
        <DiagramTabWrapper className="diagram-tab__wrapper">
            {/* тут должен быть компонент "Здоровенный разноцветный круг" */}

            <DiagramTableBar className="diagram-tab__table-bar">
                <DiagramButtonWrapper className="diagram-tab__btn-wrapper">
                    <DiagramButton defaultValue="Month" name="month" className="diagram-tab__month-btn">
                        <option value="Month" disabled style={{display: "none"}}>Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </DiagramButton>
                    <IconSVG id="icon-diagram-tab-arrow-down"/>
                </DiagramButtonWrapper>

                <DiagramButtonWrapper className="diagram-tab__btn-wrapper">
                    <DiagramButton defaultValue="Year" name="year" className="diagram-tab__year-btn">
                        <option value="Year" disabled style={{display: "none"}}>Year</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </DiagramButton>
                    <IconSVG id="icon-diagram-tab-arrow-down"/>
                </DiagramButtonWrapper>
                    
               
                
                
                <Table tableData={tableData}/>
            </DiagramTableBar>
            
        </DiagramTabWrapper>
        
    )
}
