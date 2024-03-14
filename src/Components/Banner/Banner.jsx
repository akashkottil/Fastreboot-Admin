import { React, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import PageHeader from '../Header/PageHeader';
import Bannerlist from './Bannerlist';

function Banner() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  const headerdata = useMemo(() => {
    return {
      data: "Banner Management",
      page: "Add Banner"
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
                      <h4>Add Banner Details</h4>
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
                      <label>Image<span className="login-danger">*</span></label>
                      <input
                        {...register("image", { required: true })}
                        className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                        type="file"
                        placeholder=""
                      />
                      {errors.image && <div className="invalid-feedback">Image is required</div>}
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
      <Bannerlist />
    </div>
  );
}

export default Banner;
