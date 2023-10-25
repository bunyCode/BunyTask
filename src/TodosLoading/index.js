import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
    return Array(3).fill(

        <div className="TodosLoading">
            <span className="TodosLoadingCheck"></span>
            <p className="TodosLoadingName"></p>
            <span className="TodosLoadingDelete">

            </span>
        </div>

    )
}

export { TodosLoading };
