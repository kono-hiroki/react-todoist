import React from "react";
import moment from "moment";
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from "react-icons/fa";

export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) =>
         showTaskDate && (
           <div className="task-date" data-testid="task-date-overlay">
             <ul className="task-date__list">
               <li
                 onClick={() => {
                   setShowTaskDate(false);
                   setTaskDate(moment().format("YYYY/MM/DD"));
                 }}
                 data-testid="task-date-today"
               >
                 <span>
                   <FaSpaceShuttle />
                 </span>
                 <span>今日</span>
               </li>
               <li
                 onClick={() => {
                   setShowTaskDate(false);
                   setTaskDate(
                     moment()
                       .add(1, "day")
                       .format("YYYY/MM/DD")
                   );
                 }}
                 data-testid="task-date-tomorrow"
               >
                 <span>
                   <FaSun />
                 </span>
                 <span>明日</span>
               </li>
               <li
                 onClick={() => {
                   setShowTaskDate(false);
                   setTaskDate(
                     moment()
                       .add(7, "day")
                       .format("YYYY/MM/DD")
                   );
                 }}
                 data-testid="task-date-next-week"
               >
                 <span>
                   <FaRegPaperPlane />
                 </span>
                 <span>来週</span>
               </li>
             </ul>
           </div>
         );
