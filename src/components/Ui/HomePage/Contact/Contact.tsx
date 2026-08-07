"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Phone, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import SlideDown from "@/src/components/Common/Animaation/SlideDown";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";
import bn from "@/src/data/locales/bn.json";
import en from "@/src/data/locales/en.json";
import ar from "@/src/data/locales/ar.json";
import { contactInfo } from "@/src/data/contactInfo";

const LATIN_FONT = { fontFamily: "var(--font-inter)" };
const ARABIC_FONT = { fontFamily: "var(--font-arabic)" };

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

function TrilingualError({
  ar: arText,
  en: enText,
  bn: bnText,
}: {
  ar: string;
  en: string;
  bn: string;
}) {
  return (
    <p className="mt-1.5 flex flex-wrap items-center gap-x-1.5 text-xs text-red-600">
      <span style={ARABIC_FONT} dir="rtl">
        {arText}
      </span>
      <span className="text-red-300">·</span>
      <span style={LATIN_FONT}>{enText}</span>
      <span className="text-red-300">·</span>
      <span>{bnText}</span>
    </p>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    const subject = `Message from ${data.name}`;
    const body = `Email: ${data.email}\n\n${data.message}`;
    window.location.assign(
      `mailto:${contactInfo.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`,
    );
    setSubmitted(true);
    reset();
  };

  const infoItems = [
    {
      key: "email",
      icon: Mail,
      href: `mailto:${contactInfo.email}`,
      value: contactInfo.email,
      label: {
        ar: ar.contact.info.emailLabel,
        en: en.contact.info.emailLabel,
        bn: bn.contact.info.emailLabel,
      },
    },
    {
      key: "phone",
      icon: Phone,
      href: `tel:${contactInfo.phone}`,
      value: contactInfo.phone,
      label: {
        ar: ar.contact.info.phoneLabel,
        en: en.contact.info.phoneLabel,
        bn: bn.contact.info.phoneLabel,
      },
    },
    {
      key: "location",
      icon: MapPin,
      href: undefined,
      value: contactInfo.location,
      label: {
        ar: ar.contact.info.locationLabel,
        en: en.contact.info.locationLabel,
        bn: bn.contact.info.locationLabel,
      },
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-16 md:py-24 bg-white"
    >
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-indigo-100/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-indigo-50 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative">
        <SlideDown className="flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
          <div>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            >
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.contact.heading}
              </span>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl mt-1"
                style={LATIN_FONT}
              >
                {en.contact.heading}
              </span>
              <span className="block text-2xl sm:text-3xl md:text-4xl mt-1">
                {bn.contact.heading}
              </span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base space-y-0.5">
              <span className="block" style={ARABIC_FONT} dir="rtl">
                {ar.contact.subtitle}
              </span>
              <span className="block" style={LATIN_FONT}>
                {en.contact.subtitle}
              </span>
              <span className="block">{bn.contact.subtitle}</span>
            </p>
          </div>
        </SlideDown>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
          <SlideLeft className="lg:col-span-2">
            <div className="h-full bg-linear-to-br from-indigo-600 to-indigo-800 rounded-2xl p-6 md:p-8 shadow-lg shadow-indigo-900/10 flex flex-col">
              <div className="mb-6">
                <h3 className="text-white font-bold text-lg">
                  {en.contact.heading}
                </h3>
                <p className="text-indigo-200 text-sm mt-1">
                  {en.contact.subtitle}
                </p>
              </div>

              <div className="space-y-4 flex-1">
                {infoItems.map(({ key, icon: Icon, href, value, label }) => {
                  const Wrapper = href ? "a" : "div";
                  return (
                    <Wrapper
                      key={key}
                      {...(href ? { href } : {})}
                      className="group flex items-start gap-3 rounded-xl bg-white/10 hover:bg-white/15 transition-colors p-3.5"
                    >
                      <span className="p-2 bg-white rounded-lg shadow-sm shrink-0">
                        <Icon className="w-4 h-4 text-indigo-600" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="flex flex-wrap items-center gap-x-1 text-[11px] font-medium text-indigo-200 uppercase tracking-wide">
                          <span style={ARABIC_FONT} dir="rtl">
                            {label.ar}
                          </span>
                          <span>·</span>
                          <span style={LATIN_FONT}>{label.en}</span>
                          <span>·</span>
                          <span>{label.bn}</span>
                        </span>
                        <span className="block text-sm text-white mt-1 truncate">
                          {value}
                        </span>
                      </span>
                      {href && (
                        <ArrowUpRight
                          className="w-4 h-4 text-indigo-300 shrink-0 ml-auto mt-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                          aria-hidden="true"
                        />
                      )}
                    </Wrapper>
                  );
                })}
              </div>
            </div>
          </SlideLeft>

          <SlideRight className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="h-full bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-5"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 space-x-1"
                >
                  <span style={ARABIC_FONT} dir="rtl">
                    {ar.contact.form.name}
                  </span>
                  <span>·</span>
                  <span style={LATIN_FONT}>{en.contact.form.name}</span>
                  <span>·</span>
                  <span>{bn.contact.form.name}</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name", { required: true })}
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.name
                      ? "border-red-300 bg-red-50/50"
                      : "border-gray-200"
                  }`}
                />
                {errors.name && (
                  <TrilingualError
                    ar={ar.contact.form.nameRequired}
                    en={en.contact.form.nameRequired}
                    bn={bn.contact.form.nameRequired}
                  />
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 space-x-1"
                >
                  <span style={ARABIC_FONT} dir="rtl">
                    {ar.contact.form.email}
                  </span>
                  <span>·</span>
                  <span style={LATIN_FONT}>{en.contact.form.email}</span>
                  <span>·</span>
                  <span>{bn.contact.form.email}</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  })}
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.email
                      ? "border-red-300 bg-red-50/50"
                      : "border-gray-200"
                  }`}
                />
                {errors.email && (
                  <TrilingualError
                    ar={ar.contact.form.emailRequired}
                    en={en.contact.form.emailRequired}
                    bn={bn.contact.form.emailRequired}
                  />
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5 space-x-1"
                >
                  <span style={ARABIC_FONT} dir="rtl">
                    {ar.contact.form.message}
                  </span>
                  <span>·</span>
                  <span style={LATIN_FONT}>{en.contact.form.message}</span>
                  <span>·</span>
                  <span>{bn.contact.form.message}</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  aria-invalid={errors.message ? "true" : "false"}
                  {...register("message", { required: true })}
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm text-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none ${
                    errors.message
                      ? "border-red-300 bg-red-50/50"
                      : "border-gray-200"
                  }`}
                />
                {errors.message && (
                  <TrilingualError
                    ar={ar.contact.form.messageRequired}
                    en={en.contact.form.messageRequired}
                    bn={bn.contact.form.messageRequired}
                  />
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-x-1.5 rounded-full px-6 py-2.5 text-xs sm:text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-sm shadow-indigo-600/20"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span style={ARABIC_FONT} dir="rtl">
                    {ar.contact.form.submit}
                  </span>
                  <span className="text-indigo-200">|</span>
                  <span style={LATIN_FONT}>{en.contact.form.submit}</span>
                  <span className="text-indigo-200">|</span>
                  <span>{bn.contact.form.submit}</span>
                </button>

                {submitted && (
                  <p className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs sm:text-sm text-green-700">
                    <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                    {bn.contact.form.success}
                  </p>
                )}
              </div>
            </form>
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
