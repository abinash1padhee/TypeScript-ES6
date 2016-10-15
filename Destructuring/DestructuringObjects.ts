namespace DestructuringObjects {

    interface USPostalAddress {
        streetAddress1: string;
        streetAddress2?: string;
        city: string;
        state: string;
        zip: string;
        country: string;
    }

    const addressData1: USPostalAddress = {
        streetAddress1: '1001 Main Street',
        //streetAddress2: '3rd Floor',
        city: 'Anytown',
        state: 'NY',
        zip: '10001-1234',
        country: 'USA'
    };

    const {
        streetAddress1: street1,
        streetAddress2: street2 = "",
        city,
        state,
        zip,
        country
    } = addressData1;

    const employee = {
        workAddress: addressData1,
        position: {
            department: {
                name: "Development"
            }
        }
    };

    console.log(street1);

    /*Block Level const declared below */
    {
        const {workAddress: {city}, position: {department: {name: departmentName}}} = employee;
        console.log("City is "+ city);
        console.log("Department is "+ departmentName);
    }

    function categorizeEmployee({workAddress: {city} = {city: ""}, position: {department: {name: departmentName}}}) {
        return {
            city: city,
            departmentName: departmentName
        };
    }

    const category = categorizeEmployee(employee);
    console.log(category.city);
    console.log(category.departmentName);

}
