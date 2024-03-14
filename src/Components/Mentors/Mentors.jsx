import { React, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import PageHeader from '../Header/PageHeader';
import Mentorslist from './Mentorslist';

function Mentors() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  const headerdata = useMemo(() => {
    return {
      data: "Mentors",
      page: "Add Mentors"
    };
  }, []);

  return (
    <div>
      <PageHeader headerdata={headerdata}/>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-12">
                    <div className="form-heading">
                      <h4>Add Mentors Details</h4>
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
                        {...register("email", { required: true })}
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder=""
                      />
                      {errors.email && <div className="invalid-feedback">Email is required</div>}
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
                      <label>Specialization<span className="login-danger">*</span></label>
                      <input
                        {...register("specialization", { required: true })}
                        className={`form-control ${errors.specialization ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder=""
                      />
                      {errors.specialization && <div className="invalid-feedback">Specialization is required</div>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="form-group local-forms">
                      <label>Experience<span className="login-danger">*</span></label>
                      <input
                        {...register("experience", { required: true })}
                        className={`form-control ${errors.experience ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder=""
                      />
                      {errors.experience && <div className="invalid-feedback">Experience is required</div>}
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
      <Mentorslist/>
    </div>
  );
}

export default Mentors;
