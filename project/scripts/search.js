function searchEmployee(data, value) {
    return Array.from(data).filter(item => {
        if(item.fullName.includes(value)) {
            return true;
        } else if (item.nativeName.includes(value)) {
            return true;
        }
        return false;
    });
}