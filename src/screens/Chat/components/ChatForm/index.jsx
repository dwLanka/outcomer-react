import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useChatContext } from "../../hooks/useChatContext";
import { Form } from "./styled";

const initialValues = {
  question: "",
};

const validationSchema = Yup.object().shape({
  question: Yup.string().required("Please enter your question"),
});

const ChatForm = () => {
  const { handleAskMessage } = useChatContext();
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (inputRef && inputRef?.current) {
      inputRef?.current.focus();
    }
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    onSubmit: (value, { resetForm }) => {
      handleAskMessage(value.question);
      resetForm();
    },
  });

  const { values, handleSubmit, handleChange, isValid } = formik;

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <button type="submit" className="inspireMe_btn">
          <span>
            <svg
              width="15"
              height="19"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.05 4.38139C1.01365 4.44586 1.00361 4.52258 1.0221 4.59468C1.04059 4.66678 1.08609 4.72835 1.14859 4.76586L2.08991 5.33061C2.15244 5.36813 2.22686 5.3785 2.29681 5.35943C2.36675 5.34036 2.42648 5.29342 2.46286 5.22894C2.49925 5.16445 2.5093 5.0877 2.49081 5.01558C2.47232 4.94345 2.4268 4.88185 2.36427 4.84433L1.42295 4.27958C1.39199 4.261 1.35777 4.24889 1.32227 4.24396C1.28676 4.23902 1.25066 4.24134 1.21602 4.2508C1.18139 4.26025 1.1489 4.27665 1.12041 4.29906C1.09193 4.32147 1.068 4.34944 1.05 4.38139ZM13.3677 8.26433C13.3677 8.33892 13.3965 8.41046 13.4476 8.4632C13.4988 8.51595 13.5681 8.54558 13.6405 8.54558H14.7273C14.7996 8.54558 14.869 8.51595 14.9201 8.4632C14.9713 8.41046 15 8.33892 15 8.26433C15 8.18974 14.9713 8.1182 14.9201 8.06545C14.869 8.01271 14.7996 7.98308 14.7273 7.98308H13.6405C13.5681 7.98308 13.4988 8.01271 13.4476 8.06545C13.3965 8.1182 13.3677 8.18974 13.3677 8.26433ZM0 8.26433C0 8.33892 0.0287337 8.41046 0.07988 8.4632C0.131026 8.51595 0.200396 8.54558 0.272727 8.54558H1.35955C1.43188 8.54558 1.50125 8.51595 1.55239 8.4632C1.60354 8.41046 1.63227 8.33892 1.63227 8.26433C1.63227 8.18974 1.60354 8.1182 1.55239 8.06545C1.50125 8.01271 1.43188 7.98308 1.35955 7.98308H0.272727C0.200396 7.98308 0.131026 8.01271 0.07988 8.06545C0.0287337 8.1182 0 8.18974 0 8.26433ZM13.625 4.27958L12.6837 4.84433C12.6212 4.88184 12.5757 4.94341 12.5572 5.01551C12.5387 5.08761 12.5488 5.16433 12.5851 5.2288C12.6222 5.29252 12.6818 5.33882 12.7515 5.35784C12.8211 5.37685 12.8952 5.36708 12.958 5.33061L13.8994 4.76586C13.9619 4.72834 14.0075 4.66674 14.0259 4.59461C14.0444 4.52248 14.0344 4.44573 13.998 4.38125C13.9616 4.31677 13.9019 4.26983 13.8319 4.25076C13.762 4.23169 13.6876 4.24206 13.625 4.27958ZM10.8187 2.90145L11.3622 1.92369C11.3982 1.85898 11.4078 1.78218 11.3889 1.71018C11.3699 1.63819 11.3241 1.57689 11.2613 1.53978C11.1986 1.50267 11.1241 1.49279 11.0543 1.5123C10.9845 1.53182 10.925 1.57914 10.889 1.64384L10.3455 2.62175C10.3277 2.6538 10.3162 2.68915 10.3116 2.72579C10.307 2.76243 10.3095 2.79964 10.3189 2.83529C10.3283 2.87094 10.3444 2.90433 10.3663 2.93357C10.3882 2.9628 10.4155 2.98729 10.4465 3.00566C10.5095 3.04184 10.5837 3.0512 10.6532 3.03176C10.7228 3.01232 10.7822 2.9656 10.8188 2.90159L10.8187 2.90145ZM4.60132 3.00566C4.6324 2.98729 4.65967 2.9628 4.68157 2.93357C4.70347 2.90433 4.71957 2.87094 4.72895 2.83529C4.73834 2.79964 4.74082 2.76243 4.73626 2.72579C4.73169 2.68915 4.72018 2.6538 4.70236 2.62175L4.15909 1.64398C4.1226 1.58035 4.06327 1.5341 3.99396 1.51523C3.92465 1.49636 3.85092 1.50639 3.78872 1.54316C3.72653 1.57992 3.68087 1.64046 3.66163 1.71168C3.64239 1.78289 3.65111 1.85905 3.68591 1.92369C3.68591 1.92369 4.22877 2.90075 4.22932 2.90159C4.26706 2.96433 4.32648 3.00996 4.39557 3.02927C4.46467 3.04859 4.53829 3.04015 4.60159 3.00566H4.60132ZM7.79673 1.91047V0.78125C7.79673 0.706658 7.76799 0.635121 7.71685 0.582376C7.6657 0.529632 7.59633 0.5 7.524 0.5C7.45167 0.5 7.3823 0.529632 7.33115 0.582376C7.28001 0.635121 7.25127 0.706658 7.25127 0.78125V1.91047C7.25127 1.98506 7.28001 2.0566 7.33115 2.10934C7.3823 2.16209 7.45167 2.19172 7.524 2.19172C7.59633 2.19172 7.6657 2.16209 7.71685 2.10934C7.76799 2.0566 7.79673 1.98506 7.79673 1.91047ZM6.01091 2.39872C6.08079 2.37955 6.14043 2.33255 6.17672 2.26805C6.213 2.20355 6.22296 2.12682 6.20441 2.05475L6.06395 1.50969C6.05526 1.47343 6.03966 1.43931 6.01804 1.40934C5.99643 1.37937 5.96924 1.35413 5.93807 1.33511C5.9069 1.31609 5.87236 1.30367 5.83648 1.29856C5.8006 1.29345 5.7641 1.29577 5.72909 1.30537C5.69409 1.31497 5.66129 1.33166 5.63261 1.35448C5.60393 1.37729 5.57995 1.40577 5.56206 1.43825C5.54417 1.47073 5.53273 1.50655 5.52841 1.54364C5.52409 1.58073 5.52698 1.61833 5.53691 1.65425L5.67736 2.19917C5.69673 2.27074 5.74245 2.33166 5.80476 2.36897C5.86707 2.40627 5.94104 2.417 6.01091 2.39886V2.39872ZM3.39136 3.97105C3.41679 3.94502 3.437 3.91408 3.45083 3.88C3.46466 3.84592 3.47184 3.80937 3.47197 3.77242C3.47209 3.73548 3.46516 3.69887 3.45156 3.66469C3.43797 3.63051 3.41797 3.59943 3.39273 3.57322L3.00859 3.17427C2.95763 3.12131 2.88836 3.09139 2.81602 3.0911C2.74367 3.09081 2.67417 3.12017 2.62282 3.17272C2.57146 3.22527 2.54245 3.29671 2.54217 3.37131C2.54189 3.44592 2.57036 3.51759 2.62132 3.57055L3.00545 3.96964C3.05703 4.02147 3.12612 4.05059 3.19813 4.05085C3.27014 4.05111 3.33943 4.02249 3.39136 3.97105ZM0.828 6.40062C0.818669 6.43629 0.816241 6.47349 0.820854 6.51012C0.825467 6.54675 0.837031 6.58208 0.854885 6.6141C0.872739 6.64612 0.896534 6.6742 0.924912 6.69673C0.953289 6.71927 0.985693 6.73582 1.02027 6.74544L1.54473 6.89155C1.57931 6.90118 1.61539 6.90369 1.65091 6.89894C1.68643 6.89419 1.7207 6.88227 1.75175 6.86387C1.7828 6.84546 1.81004 6.82093 1.8319 6.79167C1.85376 6.76241 1.86982 6.729 1.87916 6.69334C1.8885 6.65768 1.89093 6.62047 1.88633 6.58384C1.88172 6.54721 1.87017 6.51187 1.85232 6.47984C1.83447 6.44782 1.81068 6.41973 1.78231 6.39719C1.75394 6.37464 1.72153 6.35808 1.68695 6.34845L1.16236 6.20248C1.12779 6.19282 1.09171 6.19028 1.05619 6.19501C1.02067 6.19974 0.986397 6.21165 0.955341 6.23006C0.924285 6.24846 0.897053 6.273 0.875202 6.30227C0.853352 6.33153 0.837312 6.36496 0.828 6.40062ZM13.8852 6.20234L13.3606 6.34859C13.2969 6.36645 13.2416 6.40756 13.2051 6.46427C13.1685 6.52098 13.1531 6.58945 13.1618 6.65696C13.1705 6.72448 13.2026 6.78645 13.2523 6.83138C13.3019 6.8763 13.3656 6.90113 13.4317 6.90125C13.4551 6.90125 14.0276 6.74544 14.0276 6.74544C14.0966 6.7252 14.155 6.67776 14.1903 6.61339C14.2257 6.54902 14.235 6.4729 14.2162 6.40151C14.1975 6.33012 14.1523 6.2692 14.0903 6.23195C14.0284 6.1947 13.9547 6.18398 13.8852 6.20234ZM12.0425 3.96978L12.4265 3.57069C12.4518 3.54446 12.4718 3.51337 12.4853 3.47919C12.4989 3.445 12.5058 3.40839 12.5057 3.37145C12.5056 3.33451 12.4984 3.29796 12.4845 3.26388C12.4707 3.22981 12.4505 3.19888 12.425 3.17286C12.3996 3.14684 12.3695 3.12624 12.3363 3.11223C12.3032 3.09823 12.2677 3.0911 12.2318 3.09124C12.196 3.09138 12.1606 3.0988 12.1275 3.11307C12.0945 3.12734 12.0645 3.14818 12.0393 3.17441L11.6553 3.57336C11.6296 3.59935 11.6093 3.63036 11.5955 3.66457C11.5816 3.69878 11.5746 3.7355 11.5747 3.77257C11.5748 3.80964 11.5821 3.8463 11.5962 3.88041C11.6103 3.91452 11.6308 3.94539 11.6566 3.97119C11.7109 4.01778 11.7793 4.04318 11.8498 4.04292C11.9204 4.04267 11.9886 4.01677 12.0425 3.96978ZM9.37064 2.19931L9.51109 1.65439C9.52102 1.61847 9.52391 1.58087 9.51959 1.54378C9.51527 1.5067 9.50383 1.47087 9.48594 1.43839C9.46805 1.40591 9.44407 1.37743 9.41539 1.35462C9.38671 1.3318 9.35391 1.31511 9.31891 1.30551C9.28391 1.29591 9.2474 1.29359 9.21152 1.2987C9.17564 1.30381 9.1411 1.31623 9.10993 1.33525C9.07876 1.35427 9.05157 1.37951 9.02996 1.40948C9.00834 1.43945 8.99274 1.47357 8.98405 1.50983L8.84359 2.05489C8.83354 2.09086 8.83054 2.12853 8.83479 2.1657C8.83904 2.20288 8.85043 2.2388 8.86832 2.27138C8.8862 2.30395 8.91021 2.33251 8.93893 2.35539C8.96766 2.37827 9.00053 2.39501 9.03561 2.40462C9.07069 2.41424 9.10727 2.41653 9.14322 2.41137C9.17917 2.40622 9.21376 2.39371 9.24497 2.37459C9.27617 2.35547 9.30336 2.33011 9.32494 2.30002C9.34652 2.26992 9.36205 2.23568 9.37064 2.19931ZM6.15668 10.1559L6.55377 11.8961C6.69675 12.4986 7.03238 13.0339 7.50653 13.4156C7.98068 13.7973 8.56569 14.0031 9.16718 13.9999C9.37254 13.9998 9.57724 13.9759 9.77741 13.9286C10.1244 13.8487 10.4524 13.6984 10.7425 13.4863C11.0325 13.2743 11.2786 13.0048 11.4665 12.6936C11.6496 12.3935 11.7728 12.0589 11.8291 11.7092C11.8854 11.3595 11.8735 11.0017 11.7942 10.6568L11.2977 8.48061C11.2521 8.2826 11.1346 8.11014 10.9695 7.99871C10.8043 7.88728 10.6041 7.84535 10.4099 7.88155C10.3177 7.90016 10.2296 7.93616 10.1501 7.98772C10.0454 7.81112 9.87707 7.68456 9.68201 7.63581C9.48695 7.58706 9.2811 7.62011 9.10964 7.7277C9.06176 7.63731 8.99703 7.55756 8.91917 7.49303C8.84132 7.42851 8.75187 7.38048 8.65596 7.3517C8.56006 7.32293 8.45958 7.31398 8.36031 7.32536C8.26104 7.33675 8.16493 7.36825 8.0775 7.41805L7.8585 6.45758C7.81309 6.25946 7.6957 6.08687 7.53053 5.97538C7.36536 5.86389 7.165 5.82201 6.97077 5.85838C6.87065 5.87819 6.77549 5.91879 6.69105 5.9777C6.60661 6.03661 6.53467 6.11261 6.47959 6.20108C6.42544 6.287 6.38878 6.38337 6.37183 6.48434C6.35488 6.58531 6.358 6.68878 6.381 6.78847L6.92918 9.19133C6.85104 9.18743 6.77278 9.19582 6.69709 9.21622C6.50648 9.27007 6.34359 9.39814 6.24278 9.57344C6.14196 9.74874 6.11109 9.95756 6.15668 10.1559ZM6.83441 9.76086C6.88852 9.7465 6.94593 9.75449 6.99442 9.78312C7.04291 9.81174 7.07865 9.85875 7.09405 9.91414L7.31877 10.8991C7.3368 10.9708 7.38095 11.0326 7.44204 11.0716C7.50312 11.1106 7.57644 11.1238 7.64673 11.1085C7.68161 11.1 7.71453 11.0846 7.74362 11.063C7.77271 11.0415 7.7974 11.0142 7.81627 10.9828C7.83513 10.9514 7.84782 10.9164 7.85359 10.88C7.85936 10.8435 7.85811 10.8062 7.84991 10.7703C7.84991 10.7703 6.91255 6.66261 6.91186 6.6598C6.90646 6.63223 6.90646 6.60384 6.91186 6.57627C6.91725 6.54871 6.92794 6.52253 6.94329 6.49929C6.95863 6.47605 6.97833 6.4562 7.00123 6.44093C7.02412 6.42565 7.04974 6.41525 7.07659 6.41033C7.13225 6.40166 7.18903 6.415 7.23556 6.44768C7.28209 6.48035 7.31493 6.52995 7.3275 6.58653C7.3275 6.58653 8.26009 10.6745 8.26064 10.677C8.27821 10.749 8.32227 10.8112 8.38348 10.8502C8.4447 10.8893 8.51826 10.9023 8.58859 10.8864C8.62347 10.878 8.6564 10.8625 8.68549 10.841C8.71457 10.8194 8.73926 10.7921 8.75813 10.7607C8.777 10.7293 8.78968 10.6944 8.79545 10.6579C8.80123 10.6215 8.79998 10.5842 8.79177 10.5482C8.79177 10.5482 8.24141 8.1358 8.24114 8.13495C8.23592 8.10748 8.23605 8.07921 8.24154 8.05179C8.24702 8.02438 8.25774 7.99836 8.27307 7.97526C8.2884 7.95216 8.30804 7.93243 8.33084 7.91724C8.35364 7.90204 8.37914 7.89168 8.40586 7.88675C8.46151 7.87822 8.51822 7.89161 8.56472 7.92427C8.61122 7.95692 8.64408 8.00644 8.65677 8.06295L9.2025 10.455C9.21657 10.5167 9.25044 10.5717 9.2986 10.611C9.34677 10.6504 9.40641 10.6718 9.46786 10.6718C9.50883 10.6713 9.54916 10.6614 9.58594 10.6427C9.62271 10.6241 9.655 10.5973 9.68045 10.5642C9.7059 10.5311 9.72389 10.4925 9.73309 10.4514C9.74229 10.4102 9.74247 10.3674 9.73364 10.3262C9.73364 10.3262 9.30123 8.43055 9.30082 8.42914C9.29557 8.40163 9.29568 8.37331 9.30114 8.34584C9.30659 8.31837 9.31729 8.29229 9.3326 8.26912C9.34792 8.24594 9.36754 8.22614 9.39034 8.21086C9.41314 8.19558 9.43866 8.18512 9.46541 8.18009C9.52107 8.17139 9.57787 8.18472 9.62441 8.2174C9.67094 8.25008 9.70377 8.2997 9.71632 8.3563C9.71632 8.3563 10.1441 10.2312 10.1445 10.2327C10.1622 10.3012 10.2038 10.3605 10.2614 10.3992C10.319 10.4379 10.3884 10.4533 10.4564 10.4423C10.4929 10.4362 10.5278 10.4224 10.559 10.4017C10.5901 10.3811 10.6168 10.354 10.6374 10.3223C10.6579 10.2905 10.6719 10.2547 10.6785 10.2172C10.6851 10.1796 10.684 10.141 10.6755 10.1038C10.6755 10.1038 10.3516 8.68437 10.3514 8.68227C10.3462 8.65478 10.3463 8.62651 10.3517 8.59907C10.3572 8.57164 10.3679 8.5456 10.3832 8.52245C10.3984 8.4993 10.418 8.47951 10.4408 8.46422C10.4635 8.44892 10.489 8.43844 10.5157 8.43336C10.5714 8.42472 10.6282 8.43806 10.6747 8.47073C10.7213 8.50339 10.7542 8.55297 10.7669 8.60956L11.2632 10.7855C11.3259 11.0582 11.3352 11.3411 11.2907 11.6177C11.2461 11.8942 11.1486 12.1588 11.0037 12.396C10.7788 12.7638 10.4545 13.0557 10.0708 13.2357C9.68703 13.4157 9.26058 13.476 8.84399 13.4091C8.42741 13.3423 8.0389 13.1512 7.72633 12.8594C7.41376 12.5677 7.19079 12.188 7.08491 11.7672L6.68795 10.0271C6.67413 9.97175 6.68168 9.91306 6.709 9.86337C6.73632 9.81369 6.78128 9.77688 6.83441 9.76072V9.76086Z"
                fill="white"
              />
              <path
                d="M12.3491 10.6461C12.6582 9.92247 12.818 9.14042 12.8182 8.34969C12.8182 5.26297 10.4318 2.75 7.5 2.75C4.56818 2.75 2.18182 5.26297 2.18182 8.34969C2.18015 9.40456 2.46398 10.439 3.00136 11.3366C3.21068 11.6706 3.44118 11.9901 3.69136 12.2928C3.82636 12.4644 3.96545 12.6402 4.09364 12.8187C4.87492 13.9555 5.37659 15.2711 5.55545 16.6522C5.57119 16.8038 5.62675 16.9481 5.71614 17.0695C5.80553 17.1909 5.92537 17.2849 6.06273 17.3412V17.6661C6.06058 17.8848 6.14265 18.0954 6.29094 18.2517C6.43922 18.4081 6.64159 18.4974 6.85364 18.5H8.14636C8.35841 18.4974 8.56079 18.4081 8.70907 18.2517C8.85735 18.0954 8.93942 17.8848 8.93727 17.6661V17.3483C9.077 17.296 9.19972 17.2044 9.29155 17.0838C9.38337 16.9633 9.44063 16.8186 9.45682 16.6663C9.55171 15.9011 9.74382 15.1522 10.0282 14.4388C9.98455 14.4514 9.87955 14.5189 9.89864 14.4767C9.65885 14.5332 9.4137 14.562 9.16773 14.5625C8.44231 14.5692 7.73619 14.3217 7.16494 13.8606C6.59368 13.3994 6.19113 12.752 6.02318 12.0242L5.62636 10.2847C5.5614 9.99605 5.58982 9.69343 5.70727 9.42301C5.82471 9.15259 6.02474 8.92923 6.27682 8.78703L5.85 6.91672C5.81014 6.74372 5.80469 6.56418 5.83399 6.38895C5.86328 6.21372 5.92672 6.04643 6.02045 5.89719C6.11512 5.745 6.23873 5.61419 6.38381 5.51267C6.52889 5.41116 6.69244 5.34104 6.86455 5.30656C6.94626 5.28972 7.02939 5.28124 7.11273 5.28125C7.40837 5.28382 7.69466 5.38837 7.92598 5.57824C8.1573 5.76812 8.32034 6.03238 8.38909 6.32891L8.48727 6.75922C8.77729 6.76942 9.05568 6.87931 9.27818 7.07141C9.35208 7.05852 9.42688 7.05193 9.50182 7.05172C9.78894 7.05285 10.0678 7.15117 10.2955 7.33156C10.2982 7.33156 10.3009 7.33016 10.3036 7.33016C10.3854 7.31331 10.4685 7.30484 10.5518 7.30484C10.8473 7.30739 11.1334 7.41176 11.3647 7.60134C11.596 7.79093 11.7591 8.05485 11.8282 8.35109L12.3245 10.528C12.3341 10.5673 12.3423 10.6067 12.3491 10.6461ZM6.60818 17.375H7.22727V15.8284C7.22727 15.7538 7.25601 15.6823 7.30715 15.6295C7.3583 15.5768 7.42767 15.5472 7.5 15.5472C7.57233 15.5472 7.6417 15.5768 7.69285 15.6295C7.74399 15.6823 7.77273 15.7538 7.77273 15.8284V17.375H8.39182V17.6661C8.3941 17.7356 8.36954 17.8033 8.32352 17.8541C8.2775 17.905 8.21379 17.935 8.14636 17.9375H6.85364C6.78621 17.935 6.7225 17.905 6.67648 17.8541C6.63046 17.8033 6.6059 17.7356 6.60818 17.6661V17.375ZM5.99455 5.11391C5.96453 5.18151 5.91009 5.23435 5.84284 5.26114C5.77558 5.28794 5.70084 5.28658 5.63455 5.25734L5.34409 5.12516C5.31131 5.11042 5.28168 5.08913 5.25691 5.06252C5.23215 5.03591 5.21274 5.00451 5.19981 4.97013C5.18688 4.93574 5.18068 4.89905 5.18157 4.86218C5.18246 4.82531 5.19042 4.78899 5.205 4.75531C5.2344 4.68713 5.28871 4.63367 5.35612 4.60655C5.42353 4.57943 5.49859 4.58084 5.565 4.61047L5.85545 4.74266C5.88831 4.75751 5.91799 4.77892 5.94279 4.80565C5.96759 4.83238 5.98701 4.86391 5.99994 4.89842C6.01287 4.93293 6.01905 4.96974 6.01813 5.00672C6.0172 5.0437 6.00918 5.08013 5.99455 5.11391ZM6.49909 4.70047C6.43985 4.69902 6.38259 4.67823 6.33554 4.64108C6.28849 4.60393 6.25408 4.55235 6.23727 4.49375L6.12818 4.09016C6.10948 4.01819 6.11904 3.94152 6.15477 3.87677C6.19051 3.81202 6.24954 3.76439 6.31909 3.74422C6.35365 3.73429 6.38978 3.73151 6.42539 3.73604C6.461 3.74057 6.49538 3.75233 6.52657 3.77063C6.55775 3.78893 6.58511 3.81342 6.60708 3.84267C6.62904 3.87193 6.64517 3.90538 6.65455 3.94109L6.76227 4.34469C6.77312 4.38643 6.77453 4.43019 6.76641 4.47258C6.75829 4.51498 6.74085 4.55489 6.71544 4.58925C6.69002 4.62361 6.6573 4.6515 6.61979 4.67079C6.58229 4.69007 6.541 4.70022 6.49909 4.70047ZM7.86136 4.35875L7.67864 4.63156C7.65288 4.66821 7.61905 4.69804 7.57993 4.71857C7.54082 4.73911 7.49753 4.74977 7.45364 4.74969C7.40443 4.74895 7.35632 4.73457 7.31435 4.70807C7.27238 4.68157 7.2381 4.64391 7.21509 4.59905C7.19209 4.55419 7.18121 4.50377 7.18359 4.45308C7.18597 4.40239 7.20153 4.3533 7.22864 4.31094C7.23 4.31094 7.41136 4.03813 7.41136 4.03813C7.45329 3.97839 7.51624 3.93796 7.58672 3.92549C7.6572 3.91303 7.72961 3.92952 7.78845 3.97144C7.84728 4.01336 7.88785 4.07737 7.90148 4.14976C7.91511 4.22216 7.90071 4.29717 7.86136 4.35875Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="btn_text">Inspire Me</span>
        </button>

        <input
          ref={inputRef}
          type="text"
          placeholder="Ask anything ..."
          name="question"
          value={values.question}
          onChange={handleChange}
          autoComplete="off"
        />

        <button
          title="Send"
          type="buton"
          className="send_btn"
          disabled={!isValid}
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.65765 9.76569L6.63605 8.67623C7.08059 8.57907 7.08059 8.42093 6.63605 8.32377L1.65765 7.23431C1.36111 7.16954 1.07231 6.85326 1.01311 6.52911L0.0173756 1.0821C-0.0716912 0.595428 0.190443 0.369308 0.602443 0.577338L15.7942 8.24879C16.0686 8.38738 16.0686 8.61262 15.7942 8.75121L0.602443 16.4227C0.190443 16.6307 -0.0716912 16.4046 0.0173756 15.9179L1.01311 10.4709C1.07231 10.1467 1.36111 9.83046 1.65765 9.76569Z"
              fill="#036F3A"
            />
          </svg>
        </button>
      </Form>

      <div className="notice">
        Outcomers can make mistakes, please double-check the important
        information
      </div>
    </>
  );
};

export default ChatForm;
