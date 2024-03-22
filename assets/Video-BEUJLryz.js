import{j as e,s as j,r}from"./index-1-ZFNGJZ.js";import{a as p,r as u,p as N,T as b,c as g,E as v,u as f,P as w}from"./pdf-icon-04-BZXNyS8i.js";function y(){return e.jsx("div",{children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-12",children:e.jsxs("div",{className:"card  card-table show-entire",children:[e.jsx("div",{className:"card-body",children:e.jsx("div",{className:"page-table-header mb-2",children:e.jsxs("div",{className:"row align-items-center",children:[e.jsx("div",{className:"col",children:e.jsxs("div",{className:"doctor-table-blk",children:[e.jsx("h3",{children:"User List"}),e.jsxs("div",{className:"doctor-search-blk",children:[e.jsx("div",{className:"top-nav-search table-search-blk",children:e.jsxs("form",{children:[e.jsx("input",{type:"text",className:"form-control",placeholder:"Search here"}),e.jsx("a",{className:"btn",children:e.jsx("img",{src:j,alt:""})})]})}),e.jsxs("div",{className:"add-group",children:[e.jsx("a",{className:"btn btn-primary add-pluss ms-2",children:e.jsx("img",{src:p,alt:""})}),e.jsx("a",{className:"btn btn-primary doctor-refresh ms-2",children:e.jsx("img",{src:u,alt:""})})]})]})]})}),e.jsxs("div",{className:"col-auto text-end float-end ms-auto download-grp",children:[e.jsx("a",{className:"me-2",children:e.jsx("img",{src:N,alt:""})}),e.jsx("a",{className:"me-2",children:e.jsx("img",{src:b,alt:""})}),e.jsx("a",{className:"me-2",children:e.jsx("img",{src:g,alt:""})}),e.jsx("a",{children:e.jsx("img",{src:v,alt:""})})]})]})})}),e.jsx("div",{className:"table-responsive",children:e.jsxs("table",{className:"table border-0 custom-table comman-table datatable mb-0",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"No"}),e.jsx("th",{children:"Video Path"}),e.jsx("th",{children:"Heading"}),e.jsx("th",{children:"Description"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"1"}),e.jsx("td",{children:e.jsx("iframe",{width:"150",height:"150",src:"https://www.youtube.com/embed/G9e0R1T2JxM",title:"Flutter MediaQuery | Flutter Responsive Design",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),e.jsx("td",{children:"Demo heading"}),e.jsx("td",{children:"demo decsription"}),e.jsx("td",{className:"text-end",children:e.jsxs("div",{className:"dropdown dropdown-action",children:[e.jsx("a",{href:"#",className:"action-icon dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false",children:e.jsx("i",{className:"fa fa-ellipsis-v"})}),e.jsxs("div",{className:"dropdown-menu dropdown-menu-end",children:[e.jsxs("a",{className:"dropdown-item","data-bs-toggle":"modal","data-bs-target":"#delete_patients",children:[e.jsx("i",{className:"fa-solid fa-pen-to-square m-r-5"})," Edit"]}),e.jsxs("a",{className:"dropdown-item","data-bs-toggle":"modal","data-bs-target":"#delete_patient",children:[e.jsx("i",{className:"fa fa-trash-alt m-r-5"})," Delete"]})]})]})})]})})]})})]})})})})}function S(){const{register:i,handleSubmit:l,formState:{errors:a}}=f(),[d,c]=r.useState(""),[t,n]=r.useState(""),[o,m]=r.useState(""),h=async()=>{try{console.log({path:d,heading:t,description:o})}catch(s){console.error("Error submitting form:",s)}},x=r.useMemo(()=>({data:"Video Management",page:"Add Videos"}),[]);return e.jsxs("div",{children:[e.jsx(w,{headerdata:x}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-12",children:e.jsx("div",{className:"card",children:e.jsx("div",{className:"card-body",children:e.jsx("form",{onSubmit:l(h),children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-12",children:e.jsx("div",{className:"form-heading",children:e.jsx("h4",{children:"Add Video Details"})})}),e.jsx("div",{className:"col-12 col-md-6 col-xl-4",children:e.jsxs("div",{className:"form-group local-forms",children:[e.jsxs("label",{children:["Video Path",e.jsx("span",{className:"login-danger",children:"*"})]}),e.jsx("input",{...i("videoPath",{required:!0}),className:`form-control ${a.videoPath?"is-invalid":""}`,type:"text",placeholder:"",onChange:s=>c(s.target.value)}),a.videoPath&&e.jsx("div",{className:"invalid-feedback",children:"Video Path is required"})]})}),e.jsx("div",{className:"col-12 col-md-6 col-xl-4",children:e.jsxs("div",{className:"form-group local-forms",children:[e.jsxs("label",{children:["Heading",e.jsx("span",{className:"login-danger",children:"*"})]}),e.jsx("input",{...i("heading",{required:!0}),className:`form-control ${a.heading?"is-invalid":""}`,type:"text",placeholder:"",onChange:s=>n(s.target.value)}),a.heading&&e.jsx("div",{className:"invalid-feedback",children:"Heading is required"})]})}),e.jsx("div",{className:"col-12 col-md-6 col-xl-4",children:e.jsxs("div",{className:"form-group local-forms",children:[e.jsxs("label",{children:["Description",e.jsx("span",{className:"login-danger",children:"*"})]}),e.jsx("input",{...i("description",{required:!0}),className:`form-control ${a.description?"is-invalid":""}`,type:"text",placeholder:"",onChange:s=>m(s.target.value)}),a.description&&e.jsx("div",{className:"invalid-feedback",children:"Description is required"})]})}),e.jsx("div",{className:"col-12 col-md-6 col-xl-4",children:e.jsxs("div",{className:"doctor-submit text-end",children:[e.jsx("button",{type:"submit",className:"btn btn-primary submit-form me-2",children:"Submit"}),e.jsx("button",{type:"button",className:"btn btn-primary cancel-form",children:"Cancel"})]})})]})})})})})}),e.jsx(y,{})]})}export{S as default};
