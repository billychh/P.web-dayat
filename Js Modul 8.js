document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#data-table tbody');
    const form = document.getElementById('data-form');

    async function fetchData() {
        const response = await fetch('/api/data');
        const data = await response.json();
        tableBody.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.city}</td>
                <td>
                    <button onclick="editData(${item.id})">Edit</button>
                    <button onclick="deleteData(${item.id})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const id = formData.get('id');
        const url = id ? `/api/data/${id}` : '/api/data';
        const method = id ? 'PUT' : 'POST';
        const body = {
            name: formData.get('name'),
            age: formData.get('age'),
            city: formData.get('city')
        };

        await fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        form.reset();
        fetchData();
    });

    window.editData = async (id) => {
        const response = await fetch(`/api/data/${id}`);
        const data = await response.json();
        form.id.value = data.id;
        form.name.value = data.name;
        form.age.value = data.age;
        form.city.value = data.city;
    };

    window.deleteData = async (id) => {
        await fetch(`/api/data/${id}`, {
            method: 'DELETE'
        });
        fetchData();
    };

    fetchData();
});
