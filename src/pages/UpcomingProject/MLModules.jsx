import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import MLAnimation from "../../components/upcoming/MLAnimation";

const MLModules = () => {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden bg-gradient-to-br from-[#290f41] via-[#0B2340] to-[#0e4585] pt-24 pb-16 lg:pt-36 lg:pb-20">
        {/* <section className="relative overflow-hidden bg-gradient-to-br from-[#290f41] via-[#0B2340] to-[#0e4585] pt-32 pb-20"> */}

        {/* Grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Glow */}
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mt-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md">
            Upcoming Project
          </div>
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left */}
            <div className="order-1 text-center lg:text-left">
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
                Enterprise
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  ML Module
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8 lg:mx-0">
                <strong>Zyntro Software Solutions</strong> proudly presents the{" "}
                <strong>ML Module,</strong>an advanced Machine Learning platform
                designed to empower businesses and developers with cutting-edge
                artificial intelligence capabilities. This comprehensive
                solution democratizes access to sophisticated machine learning
                algorithms, enabling organizations of all sizes to harness the
                power of AI for data analysis, predictive modeling, automation,
                and intelligent decision-making without requiring deep expertise
                in data science.
                <br />
                <br />
                Our ML Module provides a unified framework that seamlessly
                integrates with existing systems, offering pre-trained models,
                customizable algorithms, and intuitive tools for training,
                deploying, and managing machine learning workflows. From natural
                language processing and computer vision to predictive analytics
                and recommendation systems, our platform covers the full
                spectrum of modern AI applications, making it the ideal solution
                for businesses looking to gain competitive advantages through
                intelligent automation and data-driven insights.
              </p>
            </div>

            {/* Right */}
            <div className="order-2 flex justify-center lg:justify-end">
              <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] lg:w-[620px] lg:h-[620px]">
                <MLAnimation />
              </div>
            </div>
          </div>

          {/* About */}

          {/* <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#141414]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]"> */}

          <div className="group rounded-[32px] mt-20 border border-white/10 bg-[#141414]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]">
            <h2 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 md:text-4xl">
              Comprehensive{" "}
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                ML Capabilities & Architecture{" "}
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              The ML Module is built on a robust, scalable architecture that
              supports the entire machine learning lifecycle, from data
              preparation and feature engineering to model training, validation,
              and deployment. Our platform incorporates state-of-the-art
              algorithms spanning supervised learning, unsupervised learning,
              reinforcement learning, and deep learning paradigms. Users can
              leverage pre-built models for common tasks such as image
              classification, sentiment analysis, fraud detection, and demand
              forecasting, or develop custom models tailored to their specific
              business requirements using our flexible framework.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              At the heart of our system lies an intelligent AutoML engine that
              automates the complex process of model selection, hyperparameter
              tuning, and feature optimization. This revolutionary capability
              enables users without extensive machine learning expertise to
              develop high-performing models by simply providing their data and
              defining objectives. The AutoML engine employs advanced techniques
              including neural architecture search, Bayesian optimization, and
              ensemble methods to explore vast model spaces efficiently, often
              discovering solutions that match or exceed those created by
              experienced data scientists.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              The platform's data processing pipeline handles diverse data types
              including structured databases, unstructured text, images, audio,
              video, and time-series data. Advanced preprocessing capabilities
              automatically handle missing values, outlier detection,
              normalization, and feature scaling. Our feature engineering
              toolkit includes automated feature generation, dimensionality
              reduction, and feature selection algorithms that identify the most
              relevant predictors for your models. Integration with popular data
              sources such as SQL databases, NoSQL systems, cloud storage, and
              real-time data streams ensures seamless connectivity with existing
              infrastructure. The system also supports federated learning,
              enabling organizations to train models on distributed datasets
              while maintaining data privacy and security.
            </p>
          </div>

          <div className="group rounded-[32px]  mt-20 border border-white/10 bg-[#141414]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]">
            <h2 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300 md:text-4xl">
              Deployment,
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Monitoring & Enterprise Integration
              </span>
            </h2>
            <p className="mt-8 text-lg leading-8 text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
              Deploying machine learning models into production environments has
              traditionally been a significant challenge, but our ML Module
              streamlines this process with comprehensive deployment tools and
              infrastructure. Models can be deployed as REST APIs, batch
              processing jobs, or embedded directly into applications using our
              lightweight inference engines. The platform supports multiple
              deployment targets including on-premises servers, cloud
              environments, edge devices, and mobile platforms, with automatic
              optimization for each target architecture to ensure optimal
              performance and resource utilization.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Enterprise integration capabilities ensure that the ML Module
              works seamlessly within existing IT ecosystems. The platform
              provides SDKs and APIs for popular programming languages including
              Python, Java, JavaScript, and R, enabling developers to
              incorporate machine learning capabilities into applications using
              familiar tools. Pre-built connectors for business intelligence
              platforms, data warehouses, CRM systems, and enterprise resource
              planning software facilitate rapid integration. Role-based access
              controls, encryption at rest and in transit, and compliance with
              industry standards such as GDPR, HIPAA, and SOC 2 ensure that
              sensitive data and models remain secure.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our robust model monitoring and management system provides
              real-time visibility into model performance, detecting data drift,
              concept drift, and performance degradation before they impact
              business outcomes. Automated retraining pipelines can be
              configured to continuously improve models as new data becomes
              available, ensuring that predictions remain accurate over time.
              The platform includes A/B testing capabilities for comparing model
              versions, gradual rollout mechanisms for safe deployment of
              updates, and instant rollback options if issues are detected.
              Comprehensive logging and audit trails provide full transparency
              into model decisions, essential for regulatory compliance and
              explainability requirements.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The ML Module also includes comprehensive visualization and
              explanation tools that make model insights accessible to
              non-technical stakeholders. Interactive dashboards display model
              performance metrics, feature importance rankings, and prediction
              distributions. Explainability features such as SHAP values, LIME,
              and attention visualizations help users understand why models make
              specific predictions, building trust and enabling informed
              decision-making. As Zyntro Software Solutions continues to advance
              this platform, we remain committed to making machine learning a
              practical, powerful tool for solving real-world business
              challenges, transforming how organizations leverage their data
              assets to drive innovation, efficiency, and competitive advantage
              in an increasingly AI-driven world.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MLModules;
