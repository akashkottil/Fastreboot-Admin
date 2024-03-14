import { React, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import PageHeader from '../Header/PageHeader';
import Userlist from './Userlist';


function User() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  const headerdata = useMemo(() => {
    return {
      data: "User Management",
      page: "Add User"
    };
  }, []);

  return (
    <div>
      <PageHeader headerdata={headerdata} />
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-12">
                    <div className="form-heading">
                      <h4>Add User Details</h4>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="form-group local-forms">
                      <label>Name<span className="login-danger">*</span></label>
                      <input
                        {...register("name", { required: true })}
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder=""
                      />
                      {errors.name && <div className="invalid-feedback">Name is required</div>}
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="form-group local-forms">
                      <label>Email<span className="login-danger">*</span></label>
                      <input
                        {...register("email", {
                          required: true,
                          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                        })}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder=""
                      />
                      {errors.email && errors.email.type === "required" && (
                        <div className="invalid-feedback">Email is required</div>
                      )}
                      {errors.email && errors.email.type === "pattern" && (
                        <div className="invalid-feedback">Please enter a valid email address</div>
                      )}
                    </div>
                  </div>


                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="form-group local-forms">
                      <label>Password<span className="login-danger">*</span></label>
                      <input
                        {...register("password", { required: true })}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        type="password"
                        placeholder=""
                      />
                      {errors.password && <div className="invalid-feedback">Password is required</div>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="form-group local-forms">
                      <label>Phone<span className="login-danger">*</span></label>
                      <input
                        {...register("phone", { required: true })}
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder=""
                      />
                      {errors.phone && <div className="invalid-feedback">Phone is required</div>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="form-group local-forms">
                      <label>Mentor<span className="login-danger">*</span></label>
                      <select
                        {...register("mentor", { required: true })}
                        className={`form-control ${errors.mentor ? 'is-invalid' : ''}`}
                      >
                        <option value="">Select Mentor</option>
                        <option value="abin">Abin</option>
                        <option value="aakash">Aakash</option>
                      </select>
                      {errors.mentor && <div className="invalid-feedback">Mentor is required</div>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="doctor-submit text-end">
                      <button type="submit" className="btn btn-primary submit-form me-2">
                        Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary cancel-form"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Userlist />
    </div>
  );
}

export default User;
