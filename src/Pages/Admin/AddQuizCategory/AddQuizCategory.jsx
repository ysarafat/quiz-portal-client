/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Swal from 'sweetalert2';

function AddQuizCategory() {
    const [loading, setLoading] = useState(false);
    const handleQuizCategory = (event) => {
        event.preventDefault();
        setLoading(true);
        const form = event.target;
        const name = form.name.value;
        const image = form.image.files;
        const description = form.description.value;
        const formData = new FormData();

        formData.append('file', image[0]);
        formData.append('upload_preset', 'quizPortal');
        formData.append('cloud_name', `${import.meta.env.VITE_CLOUD_NAME}`);
        fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((image) => {
                const category = { name, image: image.url, description };
                fetch('https://quiz-portal.onrender.com/add-category', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(category),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Successful Add Quiz Category',
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            setLoading(false);
                            form.reset();
                        }
                    });
            });
    };
    return (
        <div>
            <div>
                <h1 className="lg:text-4xl text-3xl mb-10 font-title font-bold text-center">
                    Add Quiz Category
                </h1>
            </div>
            <form onSubmit={handleQuizCategory} action="">
                <div className=" space-y-2">
                    <div className="w-full">
                        <label className="text-lg text-textDark">Quiz Name</label>
                        <input
                            type="text"
                            className="h-11 w-full border border-slate-200 outline-primaryColor rounded-lg px-3 text-textDark"
                            placeholder="Enter Quiz Name"
                            name="name"
                            required
                        />
                    </div>
                    <div className="w-full ">
                        <label className="text-lg text-textDark ">Quiz Banner</label>
                        <input
                            type="file"
                            className="h-11 w-full border  border-slate-200 outline-primaryColor rounded-lg text-textDark file:bg-primaryColor file:border-none file:h-11 "
                            name="image"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-lg text-textDark ">Quiz Description</label>
                        <textarea
                            name="description"
                            id=""
                            cols="30"
                            rows="10"
                            className=" w-full border border-slate-200 outline-primaryColor rounded-lg p-3 text-textDark"
                            placeholder="Description Here"
                            required
                        />
                    </div>
                </div>
                <input
                    className="h-11 bg-primaryColor hover:bg-hoverColor disabled:bg-slate-300 mt-4 w-full text-lg text-textDark font-title rounded-lg "
                    disabled={loading}
                    type="submit"
                    value={loading ? 'Please Wait' : 'Add Quiz'}
                />
            </form>
        </div>
    );
}

export default AddQuizCategory;
