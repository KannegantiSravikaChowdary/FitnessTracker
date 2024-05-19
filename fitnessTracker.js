function onAdd() {
    let workoutTypeInput = document.getElementById("workoutTypeInput");
    let workoutDurationInput = document.getElementById("workoutDurationInput");
    let listSection = document.getElementById("listSection");
    let warning = document.getElementById("warning");

    // Check if both input fields are filled
    if (workoutTypeInput.value.trim() === "" || workoutDurationInput.value.trim() === "") {
        warning.classList.add("showwarning");
        return;
    }

    // Create new elements to display the workout
    let workoutItem = document.createElement("div");
    workoutItem.classList.add("workout-item");

    let workoutType = document.createElement("span");
    workoutType.textContent = workoutTypeInput.value;

    let workoutDuration = document.createElement("span");
    workoutDuration.textContent = workoutDurationInput.value + " minutes";

    // Create edit and delete buttons
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    editButton.onclick = function() {
        editWorkout(workoutItem, workoutType, workoutDuration);
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function() {
        listSection.removeChild(workoutItem);
    };

    // Append workout details and buttons to the workout item
    workoutItem.appendChild(workoutType);
    workoutItem.appendChild(document.createTextNode(" - "));
    workoutItem.appendChild(workoutDuration);
    workoutItem.appendChild(editButton);
    workoutItem.appendChild(deleteButton);

    // Append the workout item to the workout log section
    listSection.appendChild(workoutItem);

    // Clear input fields
    workoutTypeInput.value = "";
    workoutDurationInput.value = "";

    // Hide warning message
    warning.classList.remove("showwarning");
}

function editWorkout(workoutItem, workoutType, workoutDuration) {
    let newType = prompt("Enter new workout type:", workoutType.textContent);
    let newDuration = prompt("Enter new duration (minutes):", workoutDuration.textContent);

    if (newType !== null && newDuration !== null) {
        workoutType.textContent = newType;
        workoutDuration.textContent = newDuration + " minutes";
    }
}
