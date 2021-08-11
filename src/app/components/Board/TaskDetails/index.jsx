import React from "react";
import { useSelector } from "react-redux";
import "./TaskDetails.scss";


const TaskDetails = () => {

    const lists = useSelector(state => {
        const {boardsById, currentBoardId, listsById} = state;
        const listIDs = boardsById[currentBoardId] ? boardsById[currentBoardId].lists : [];
        return listIDs.map((listId) => listsById[listId]);
    })

    return (
        <div className="tasks-table">
            <table>
                <thead>
                <tr className="tasks-row tasks-header">
                    <td>
                        <h4>Trello Title</h4>
                    </td>
                    <td>
                        <h4>Task count</h4>
                    </td>
                </tr>
                </thead>
                <tbody className="tasks-body">
                {lists.map((list) => <tr className="tasks-row">
                        <td><h5>{list.title}</h5></td>
                        <td><h5>{list.cards.length}</h5></td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default TaskDetails;
