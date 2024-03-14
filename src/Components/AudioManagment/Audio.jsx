import { React, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import PageHeader from '../Header/PageHeader';
import Audiolist from './Audiolist';

function Audio() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  const headerdata = useMemo(() => {
    return {
      data:"Audio Management",
      page:"Add Audios"
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
                      <h4>Add Audio Details</h4>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="form-group local-forms">
                      <label>Path<span className="login-danger">*</span></label>
                      <input
                        {...register("path", { required: true })}
                        className={`form-control ${errors.path ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder=""
                      />
                      {errors.path && <div className="invalid-feedback">Path is required</div>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="form-group local-forms">
                      <label>Heading<span className="login-danger">*</span></label>
                      <input
                        {...register("heading", { required: true })}
                        className={`form-control ${errors.heading ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder=""
                      />
                      {errors.heading && <div className="invalid-feedback">Heading is required</div>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="form-group local-forms">
                      <label>Description<span className="login-danger">*</span></label>
                      <input
                        {...register("description", { required: true })}
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                        type="text"
                        placeholder=""
                      />
                      {errors.description && <div className="invalid-feedback">Description is required</div>}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-xl-4">
                    <div className="doctor-submit text-end">
                      <button type="submit" className="btn btn-primary submit-form me-2">
                        Submit
                      </button>
                      <button type="button" className="btn btn-primary cancel-form">
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
      <Audiolist/>
    </div>
  );
}

export default Audio;
